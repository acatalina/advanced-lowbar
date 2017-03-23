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
});