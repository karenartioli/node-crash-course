const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req,res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'About'});
});

app.get('/dieroll', (req,res) => {
    res.render('dieroll', { title: 'Die Roll'});
});

app.get('/family', (req,res) => {
    const myFamily = [
        {name: "Karen", age: 34, gender: "female"},
        {name: "Lucas", age: 3, gender: "male"},
        {name: "Daniel", age: 34, gender: "male"}
    ];
    res.render('family', { title: 'Family', myFamily });
});

app.get('/scholars', (req,res) => {
    const scholars = ["Karen", "Huss", "Kaosara", "Naz", "Tomi", "Bob", "Kenny", "Dani", "Lauren", "Ross"];
    res.render('scholars', { title: 'Scholars', scholars });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});
