var expect = require('chai').expect;
var sinon = require('sinon');
var _ = require('../advancedLowbar');

describe('indexOf', function () {
  it('is a function', function () {
    expect(_.indexOf).to.be.a('function');
  });
  
  it('returns index value from an two elements array', function () {
    let actual = _.indexOf([1, 2, 3], 1);
    let expected = 0;
    expect(actual).to.be.equal(expected);
  });

  it('returns -1 when value is not found', function () {
    let actual = _.indexOf([1, 2, 3], 4);
    let expected = -1;
    expect(actual).to.be.equal(expected);
  });
  
});
