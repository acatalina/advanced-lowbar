var expect = require('chai').expect;
var intersection = require('../advancedLowbar').intersection;

describe('intersection', function() {
  it('is a function', function() {
    expect(intersection).to.be.a('function');
  });
});
