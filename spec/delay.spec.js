var expect = require('chai').expect;
var sinon = require('sinon');
var delay = require('../advancedLowbar').delay;

describe('delay', function () {
  it('is a function', function () {
    expect(delay).to.be.a('function');
  });
  
  it('calls a function after a specified amount of time', function(done) {
    let spy = sinon.spy();
    delay(spy, 500);
    
    setTimeout(function() {
      expect(spy.calledOnce).to.equal(true);
      done();
    }, 800);
  });

  it('it passes arguments if given to the function', function(done) {
    let spy = sinon.spy();
    delay(spy, 500, 5, 6);
    
    setTimeout(function() {
      expect(spy.calledOnce).to.equal(true);
      expect(spy.calledWithExactly(5, 6)).to.equal(true);
      done();
    }, 800);
  });
});

