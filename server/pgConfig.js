const pgConfig = {
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST
};

module.exports = pgConfig;