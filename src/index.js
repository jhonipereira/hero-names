'use strict'

const uniqueRandomArray = require('unique-random-array');
const heroNames = require('./hero-names.json');

module.exports = {
  all: heroNames,
  random: uniqueRandomArray(heroNames) //TODO: receive another param with the quantity of names to be returned
};