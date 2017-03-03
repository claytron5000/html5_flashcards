'use strict';

const express = require('express');
const app = express();
const flashcards = require('./flashcards.js');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', (req, res) => {
  let elements = JSON.parse(fs.readFileSync('./definitionsSave.json'));
  let deck = new flashcards.deckCards(elements);
  let card = deck.deliverCard();
  res.render('layout.ejs', {element:card});
});

app.post('/viewed', (req, res) => {
  console.log(req);
  let elements = JSON.parse(fs.readFileSync('./definitionsSave.json'));
  let deck = new flashcards.deckCards(elements);
  let card = deck.deliverCard();
  res.send(card);
});

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
