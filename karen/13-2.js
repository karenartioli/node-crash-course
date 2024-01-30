// 13.2 Write a route handler to remove vowels from the given string

const express = require('express');
const app = express();
app.listen(3000);

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    for (let letter of str) {
      if (!vowels.includes(letter)) {
        result += letter;
      }
    }
    return result;
  }

  app.get("/removevowels/:wordToRemoveVowels", (req, res) => {
    let wordToRemoveVowels = req.params.wordToRemoveVowels;
    let vowelsRemoved = removeVowels(wordToRemoveVowels);
    res.send(`Here is your word with vowels removed: ${vowelsRemoved}`);
  });