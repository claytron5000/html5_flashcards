'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deliverElementCard = deliverElementCard;
var fs = require('fs');

function deliverElementCard() {
  var elements = JSON.parse(fs.readFileSync('./definitionsSave.json'));
  var randomElement = elements[Math.floor(Math.random() * elements.length)];
  return randomElement;
}