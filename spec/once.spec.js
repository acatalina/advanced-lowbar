var expect = require('chai').expect;
var sinon = require('sinon');
var once = require('../advancedLowbar').once;

describe('once', function () {
  it('is a function', function () {
    expect(once).to.be.a('function');
  });
  
  it('returns a function that can only be initialize once returning the same result every call', function () {
    let spy = sinon.spy(function() { return Math.random(); });
    let tester = once(spy);
    let firstCall = tester();
    let secondCall = tester();
    let thirdCall = tester();
    
    let actual = spy.callCount;
    let expected = 1;
    expect(actual).to.equal(expected);
    expect(firstCall).to.equal(secondCall);
    expect(firstCall).to.equal(thirdCall);
  });
});