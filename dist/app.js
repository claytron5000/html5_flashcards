'use strict';

var _flashcards = require('./flashcards.js');

var flashcards = _interopRequireWildcard(_flashcards);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var element = flashcards.deliverElementCard();
  console.log(element);
  res.render('card.ejs', element);
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});