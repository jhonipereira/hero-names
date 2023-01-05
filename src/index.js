'use strict'

const uniqueRandomArray = require('unique-random-array');
const heroNames = require('./hero-names.json');

module.exports = {
  all: heroNames,
  random: uniqueRandomArray(heroNames)
};