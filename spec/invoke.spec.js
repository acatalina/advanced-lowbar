var expect = require('chai').expect;
var sinon = require('sinon');
var invoke = require('../advancedLowbar').invoke;

describe('invoke', function() {
  it('is a function', function() {
    expect(invoke).to.be.a('function');
  });
  
});