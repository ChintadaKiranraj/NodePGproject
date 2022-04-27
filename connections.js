const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "KIRAN1998",
    database: "postgres",
});

module.exports = client;