var expect = require('chai').expect;
var getIteratee = require('../advancedLowbar').getIteratee;

describe('getIteratee', function() {
  it('is a function', function() {
    expect(getIteratee).to.be.a('function');
  });

  it('returns the same function if a function is given', function() {
    let iteratee = function(e){return e;};
    expect(getIteratee(iteratee)).to.equal(iteratee);
  });

  it('returns a function that returns the method of an elem when a string is given', function() {
    let iteratee = 'toString';
    let actual = getIteratee(iteratee);
    let expected = function(elem) {
      return elem[iteratee];
    };
    expect(actual(1)).to.equal(expected(1));
  });

  it('returns a function that returns what is given when method is not a function or a string', function() {
    let iteratee = null;
    let actual = getIteratee(iteratee)(undefined);
    let expected = undefined;
    expect(actual).to.equal(expected);
  });
});