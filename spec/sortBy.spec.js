var expect = require('chai').expect;
var sortBy = require('../advancedLowbar').sortBy;

describe.only('sortBy', function() {
  it('is a function', function() {
    expect(sortBy).to.be.a('function');
  });

  it('sorts an array in ascending order according to the result of passing every element through an iteratee', function() {
    let iteratee =  function(num) {return Math.sin(num);};
    let actual = sortBy([1, 2, 3, 4, 5, 6], iteratee);
    let expected = [5, 4, 6, 3, 1, 2];
    expect(actual).to.eql(expected);
  });

});