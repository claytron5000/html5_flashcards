'use strict';

const fs = require('fs');

export function deliverElementCard() {
    let elements = JSON.parse(fs.readFileSync('./definitionsSave.json'));
    let randomElement = elements[Math.floor(Math.random() * elements.length)];
    return(randomElement);
}

function elementCard(element) {
  this.name = element.name;
  this.description = element.description;
  // This is why we'd make a new object from the json array.
  this.learned = false;
}

export function deckCards(arrayCards) {
  this.cards = arrayCards;
  this.deliverCard = function() {
    let element = this.cards[Math.floor(Math.random() * this.cards.length)];
    this.removeCard(element);
    return element;
  };
  this.removeCard = function(card) {
    this.cards.filter(function(el) {
      return el.name !== card.name;
    });
  };
}
