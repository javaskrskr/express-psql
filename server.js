const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const pool = require('./db');

dotenv.config();

const port = process.env.APP_PORT | 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('ok');
})

app.get('/data', async (req, res) => {
    try {
        if (pool) {
            const data = await pool.query('SELECT * FROM schools');
            return data.rows.length ? res.status(200).json(data.rows) : res.status(200).json({ data: "" })
        } else {
            return res.status(400).send('Pg client error');
        }
    } catch (error) {
        return res.json(error);
    }
})

app.post('/', async (req, res) => {
    const { name, location } = req.body;

    try {
        if (pool) {
            const data = await pool.query('INSERT into schools (name, address) VALUES ($1, $2) RETURNING *', [name, location]);
            return data.rows.length ? res.status(200).json(data.rows) : res.status(200).json({ data: "" })
        } else {
            return res.status(400).send('Pg client error');
        }
    } catch (error) {
        return res.json(error)
    }
})

app.listen(port, () => { console.log(`Server has started on port ${port}`); });