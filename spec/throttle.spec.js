var expect = require('chai').expect;
var throttle = require('../advancedLowbar').throttle;

describe('throttle', function() {
  it('is a function', function() {
    expect(throttle).to.be.a('function');
  });

});
