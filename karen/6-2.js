// 6.2. Write a website with express which has two routes: /roll1 or /roll2.  
// use res.send() to send a simple string back in the case of either request. 
// The string should contain the results of a dice roll (either 1 d6 die, or 2 d6 dice summed, respectively).

console.log("6.2 is running");

const express = require('express');
const app = express();
app.listen(3000, () => {console.log("starts to listening")});

function randomDieRoll() {
    return 1 + Math.floor((Math.random() * 6));
}

app.get('/roll1', (req, res) => {
    let die1 = randomDieRoll();
    res.send(`Result from 1 die roll is: ${die1}`);
});

app.get('/roll2', (req, res) => {
    let die1 = randomDieRoll();
    let die2 = randomDieRoll();
    let sum = die1 + die2;
    res.send(`Result from 2 dice roll is: ${sum}`);
});