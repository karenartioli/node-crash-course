const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/14-1', (req,res) => {
    res.render('14-1', { title: '14-1' });
});