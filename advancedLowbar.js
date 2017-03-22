var _ = {};

_.indexOf = function(arr, val, isSorted) {
  if (!Array.isArray(arr) || !val) return -1;

  if (isSorted === true) {
    let startIndex = 0;
    let prevIndex = 0;
    let endIndex = arr.length;
    let midIndex = Math.floor(endIndex / 2);

    while ((arr[midIndex] !== val) && (prevIndex / midIndex !== 1)) {
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

_.once = function(iteratee) {
  let hasBeenUsed;
  let res;

  return function() {
    if (!hasBeenUsed) {
      hasBeenUsed = true;
      res = iteratee.apply(this, arguments);
    }
    
    return res;
  };
};

_.memoize = function(fun) {
  var memo = {};

  const speedy = function() {
    const args = JSON.stringify(arguments[0]);
    
    if (memo[args]) {
      return memo[args];
    }
    memo[args] = fun.apply(null, arguments);
    return memo[args];
  };

  speedy.cache = memo;
  
  return speedy;
};

_.delay = function(fun, wait) {
  const args = Array.from(arguments).slice(2);
  
  setTimeout(function() {
    fun.apply(null, args);
  }, wait);
}; 

module.exports = _;