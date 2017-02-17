var expect = require('chai').expect;
var sinon = require('sinon');
var once = require('../advancedLowbar').once;

describe('once', function () {
  it('is a function', function () {
    expect(once).to.be.a('function');
  });
  
  it('returns a function that can only be initialize once returning the same result every call', function () {
    let spy = sinon.spy();
    let tester = once(spy);
    tester();
    tester();
    tester();
    let actual = spy.callCount;
    let expected = 1;
    expect(actual).to.equal(expected);
  });
});