const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// listen for requests
app.listen(3000);

// route to render the form
app.get('/14-2', (req, res) => {
    res.render('14-2', { title: 'faves' });
});

// route to handle form submission
app.get('/faves', (req, res) => {

    const faveFood = req.query.food;
    const faveDrink = req.query.drink;
    const faveGame = req.query.game;

    res.send(`You said you liked ${faveFood}, ${faveDrink}, and ${faveGame}`);
});