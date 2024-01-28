// 6.3. Write a website with express which sends back an array of strings, using res.json() instead of res.send()

const express = require('express');
const app = express();
app.listen(3000);

app.get('/strings', (req, res) => {
    let arrayStrings = ["karen", "daniel", "lucas"];
    res.json(`${arrayStrings}`);
});