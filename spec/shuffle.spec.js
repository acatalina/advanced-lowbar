var expect = require('chai').expect;
var sinon = require('sinon');
var shuffle = require('../advancedLowbar').shuffle;

describe('shuffle', function() {
  it('is a function', function() {
    expect(shuffle).to.be.a('function');
  });
});