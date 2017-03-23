var expect = require('chai').expect;
var difference = require('../advancedLowbar').difference;

describe('difference', function() {
  it('is a function', function() {
    expect(difference).to.be.a('function');
  });

  it('handles invalid inputs', function() {
    expect(difference()).to.eql([]);
    expect(difference(null)).to.eql([]);
    expect(difference(undefined)).to.eql([]);
  });

  it('returns the values of array not present in the other arrays', function() {
    let actual = difference([1, 2, 3, 4, 5], [5, 2, 10]);
    let expected = [1, 3, 4];
    expect(actual).to.eql(expected);
  });
});