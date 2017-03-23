var expect = require('chai').expect;
var shuffle = require('../advancedLowbar').shuffle;
var range = require('underscore').range;

describe('shuffle', function() {
  it('is a function', function() {
    expect(shuffle).to.be.a('function');
  });

  it('handles invalid inputs returning an empty array', function() {
    expect(shuffle()).to.eql([]);
    expect(shuffle(2)).to.eql([]);
    expect(shuffle(NaN)).to.eql([]);
  });  

  it('shuffles the content of an array', function() {
    let input = range(100);
    let res = shuffle(input);
    let res2 = shuffle(input);
    
    let firstShuffle = res[0] + res[1];
    let secondShuffle = res2[0] + res2[1];
    expect(firstShuffle).to.not.equal(secondShuffle);
  });

  it('returns an array with shuffled values of an object', function() {
    let input = range(100);
    input = input.reduce((res, e, i) => {
      res[i] = e;
      return res;
    }, {});
    let res = shuffle(input);
    let res2 = shuffle(input);

    let firstShuffle = res[0] + res[1];
    let secondShuffle = res2[0] + res2[1];
    expect(firstShuffle).to.not.equal(secondShuffle);
    expect(res).to.be.an('array');
  });
});