var expect = require('chai').expect;
var flatten = require('../advancedLowbar').flatten;

describe('flatten', function() {
  it('is a function', function() {
    expect(flatten).to.be.a('function');
  });

  it('handles invalid inputs', function() {
    expect(flatten()).to.eql([]);
    expect(flatten(null)).to.eql([]);
    expect(flatten({1: 1})).to.eql([]);
  });

  it('flattens a one depth nested array', function() {
    expect(flatten([1, [2]])).to.eql([1, 2]);
  });

  it('flattens nested arrays', function() {
    expect(flatten([1, [[[[2]]]]])).to.eql([1, 2]);
    expect(flatten([1, [[[[2, [3]]]]]])).to.eql([1, 2, 3]);
  });

  it('accepts a shallow parameter flatten just one level', function() {
    expect(flatten([1, [[[[2]]]]], true)).to.eql([1, [[[2]]]]);
    expect(flatten([1, [[[[2]]]]], undefined)).to.eql([1, 2]);
  });
});