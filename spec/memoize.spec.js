var expect = require('chai').expect;
var sinon = require('sinon');
var memoize = require('../advancedLowbar').memoize;

describe('memoize', function () {
  it('is a function', function () {
    expect(memoize).to.be.a('function');
  });
  
  it('it does what the input function does', function () {
    let test = function(n) { return n * 2; };
    let tester = memoize(test);
    let actual = tester(2);
    let actual2 = tester(4);
    let expected = 4;
    let expected2 = 8;
    expect(actual).to.equal(expected);
    expect(actual2).to.equal(expected2);
  });

  it('it does what the input function does', function () {
    let spy = sinon.spy(function (x) { return x; });
    let tester = memoize(spy);
    tester(2);
    tester(2);
    let actual = spy.callCount;
    let expected = 1;
    expect(actual).to.equal(expected);
  });
});