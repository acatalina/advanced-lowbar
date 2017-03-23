var expect = require('chai').expect;
var flatten = require('../advancedLowbar').flatten;

describe('flatten', function() {
  it('is a function', function() {
    expect(flatten).to.be.a('function');
  });
});