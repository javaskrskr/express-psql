const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const pgConfig = require('./pgConfig');

const port = process.env.APP_PORT | 5000;

const app = express();
app.use(cors())
app.use(express.json());

const pgClient = new Pool(pgConfig);
pgClient.on("connect", client => {
    client
        .query("CREATE TABLE schools (\
            id SERIAL PRIMARY KEY, \
            name VARCHAR(100), \
            address VARCHAR(100), \
            created_at INTEGER DEFAULT EXTRACT(EPOCH FROM NOW()))")
        .catch(err => console.log("PG ERROR", err));
});

app.get('/', (req, res) => {
    res.status(200).send('ok');
})

app.get('/data', async (req, res) => {
    try {
        const data = await pgClient.query('SELECT * FROM schools');
        return data.rows.length ? res.status(200).json(data.rows) : res.status(200).json({ data: "" })
    } catch (error) {
        return res.json(error);
    }
})

app.post('/', async (req, res) => {
    if (!req.body) res.send({ working: false });
    const { name, location } = req.body;
    if (!name && !location) res.send({ working: false });
    try {
        const data = await pgClient.query('INSERT into schools (name, address) VALUES ($1, $2) RETURNING *', [name, location]);
        return data.rows.length ? res.status(200).json(data.rows) : res.status(200).json({ data: "" });
    } catch (error) {
        return res.json(error);
    }
})

app.listen(port, () => { console.log(`Server has started on port ${port}`); });