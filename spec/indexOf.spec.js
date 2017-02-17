var expect = require('chai').expect;
var indexOf = require('../advancedLowbar').indexOf;
var range = require('underscore').range;

describe('indexOf', function () {
  it('is a function', function () {
    expect(indexOf).to.be.a('function');
  });
  
  it('returns index value from an two elements array', function () {
    let actual = indexOf([1, 2, 3], 1);
    let expected = 0;
    expect(actual).to.be.equal(expected);
  });

  it('returns -1 when value is not found', function () {
    let actual = indexOf([1, 2, 3], 4);
    let expected = -1;
    expect(actual).to.be.equal(expected);
  });
  
  it('returns index value on a larger array', function () {
    let actual = indexOf([1, 2, 4, 5, 6, 7, 8, 9, 4, 3, 1, 2, 2, 3], 4);
    let expected = 2;
    expect(actual).to.be.equal(expected);
  });

  it('performs a quicker search if true as third argument is given', function () {
    var data = range(1000000);
    var start, end, selectionTime, binaryTime;
    start = Date.now();
    indexOf(data, 999999);
    end = Date.now();
    selectionTime = end - start;

    start = Date.now();
    indexOf(data, 999999, true);
    end = Date.now();
    binaryTime = end - start;

    expect(binaryTime).to.be.lessThan(selectionTime);
  });

  it('returns index value on a larger array from index given as third argument', function () {
    let actual = indexOf([1, 2, 4, 5, 6, 7, 8, 9, 4, 3, 1, 2, 2, 3], 4, 11);
    let expected = -1;
    expect(actual).to.be.equal(expected);
    actual = indexOf([1, 2, 4, 5, 6, 7, 8, 9, 4, 3, 1, 2, 2, 3], 4, 3);
    expected = 8;
    expect(actual).to.be.equal(expected);
  });
});
