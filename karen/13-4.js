// 13.4 Write a route handler that shows any one movie by id


const express = require('express');
const { Pool } = require("pg");
const app = express();
app.listen(3000);

function makeDBConnectionPool(dbName) {
    return new Pool({
        database: dbName,
    });
}

const pool = makeDBConnectionPool("omdb");

app.get("/movies/:id", async (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM movies WHERE id = $1";
    const dbResult = await pool.query(query, [id]);
    res.send(dbResult.rows);
});