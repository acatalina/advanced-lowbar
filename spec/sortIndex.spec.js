var expect = require('chai').expect;
var sortedIndex = require('../advancedLowbar').sortedIndex;

describe('sortIndex', function() {
  it('is a function', function() {
    expect(sortedIndex).to.be.a('function');
  });

  it('returns the index at which the value should be inserted in the list to maintain order', function() {
    let actual = sortedIndex([10, 20, 30, 40, 50], 35);
    let expected = 3;
    expect(actual).to.equal(expected);
  });

  it('handles an array of objects with a third value string as a parameter', function() {
    let input = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
    
    let actual = sortedIndex(input, {name: 'larry', age: 50}, 'age');
    let expected = 1;
    expect(actual).to.equal(expected);
  });

  it('handles invalid inputs', function() {
    expect(sortedIndex()).to.equal(0);
    expect(sortedIndex(null)).to.equal(0);
    expect(sortedIndex(false)).to.equal(0);
  });
});