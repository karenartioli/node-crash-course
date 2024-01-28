// 6.4. Write a JSON Web API with express which sends back results from a database query as an array, using res.json(myData).  
// Confirm you can get the result via the browser, but then, again, write a separate node.js program to use axios to fetch the data.

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

app.get("/cars", async (req, res) => {
    const query = "SELECT DISTINCT movie_id, movie_name, EXTRACT(YEAR FROM date) AS year, runtime FROM casts_view WHERE movie_name ILIKE '%cars%'";
    const dbResult = await pool.query(query);
    res.json(dbResult.rows);
})