var expect = require('chai').expect;
var difference = require('../advancedLowbar').difference;

describe('difference', function() {
  it('is a function', function() {
    expect(difference).to.be.a('function');
  });
});