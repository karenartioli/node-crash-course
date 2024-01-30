// 13.1 Write a route handler that handles GET requests to urls such as /reverse/kaosara and replies just the reversed word, just as arasoak.

const express = require('express');
const app = express();
app.listen(3000);

function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}

app.get("/reverse/:myWordToReverse", (req, res) => {
  let myWordToReverse = req.params.myWordToReverse;
  let reversedString = reverseString(myWordToReverse);
  res.send(`Here is your reversed word: ${reversedString}`);
});