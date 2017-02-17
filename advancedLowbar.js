var _ = {};

_.indexOf = function(arr, val, isSorted) {
  if (isSorted === true) {
    var startIndex = 0;
    var prevIndex = 0;
    var endIndex = arr.length;
    var midIndex = Math.floor(endIndex / 2);

    while ( (arr[midIndex] !== val) && (prevIndex / midIndex !== 1) ) {
      if (arr[midIndex] > val) {
        endIndex = midIndex;
        prevIndex = midIndex;
        midIndex -= (midIndex - startIndex) / 2;
        midIndex = Math.floor(midIndex);
      } else {
        startIndex = midIndex;
        prevIndex = midIndex;
        midIndex += (endIndex - midIndex) / 2;
        midIndex = Math.floor(midIndex);
      }
    }

    return arr[midIndex] === val ? midIndex : -1;
  } else {
    isSorted = isSorted || 0;
    
    for (let i = isSorted; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }

    return -1;
  }
};

_.once = function(fun) {
  let hasBeenUsed;
  let res;

  return function() {
    if (!hasBeenUsed) {
      hasBeenUsed = true;
      res = fun.apply(this, arguments);
    }
    
    return res;
  };
};

_.memoize = function() {

};


module.exports = _;