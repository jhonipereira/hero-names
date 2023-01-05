'use strict';

var expect = require('chai').expect;
var heroNames = require('.')

describe('hero-names', function() {
  it('should have a list of all available names', function() { 
    expect(heroNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow to get a random name from the list', function() { 
    expect(heroNames.random()).to.satisfy(isIncludedIn(heroNames.all));
  });
});

function isArrayOfStrings(array){
  return array.every(function(item){
    return typeof item === 'string'
  })
}

function isIncludedIn(array){
  return function(item){
    return array.indexOf(item) !== -1
  }
}