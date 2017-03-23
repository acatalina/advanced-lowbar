var expect = require('chai').expect;
var intersection = require('../advancedLowbar').intersection;

describe('intersection', function() {
  it('is a function', function() {
    expect(intersection).to.be.a('function');
  });

  it('handles invalid inputs', function() {
    expect(intersection()).to.eql([]);
    expect(intersection(null)).to.eql([]);
    expect(intersection({1: 1})).to.eql([]);
  });

  it('finds the values common in all arrays given', function() {
    let actual = intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    let expected = [1, 2];
    expect(actual).to.eql(expected);
  });

  it('finds the values common in all arrays and objects given', function() {
    let actual = intersection([1, 2, 3], [101, 2, 1, 10], {1: 1, 2: 2});
    let expected = [1, 2];
    expect(actual).to.eql(expected);
  });
});
