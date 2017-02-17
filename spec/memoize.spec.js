var expect = require('chai').expect;
var sinon = require('sinon');
var memoize = require('../advancedLowbar').memoize;

describe('memoize', function () {
  it('is a function', function () {
    expect(memoize).to.be.a('function');
  });
  
  xit('', function () {
    var spy = sinon.spy();
    let actual = spy.callCount;
    let expected = 1;
    expect(actual).to.equal(expected);
  });
});