// 13.3 Write a route handler to receive and add two numbers

const express = require('express');
const app = express();
app.listen(3000);

  app.get("/add/:a/:b", (req, res) => {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let sum = a + b;
    res.send(`Here is your sum: ${sum}`);
  });