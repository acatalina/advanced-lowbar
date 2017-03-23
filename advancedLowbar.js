const map = require('./lowbar').map;
const _ = {};

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

_.memoize = function(iteratee, hashFunction) {
  const memo = {};

  const speedy = function() {
    const args = hashFunction ? 
      hashFunction.apply(null, arguments) 
      : 
      JSON.stringify(arguments[0]);
    
    if (!memo[args]) {
      memo[args] = iteratee.apply(null, arguments);
    }

    return memo[args];
  };

  speedy.cache = memo;
  
  return speedy;
};

_.delay = function(iteratee, wait) {
  const args = Array.from(arguments).slice(2);
  
  setTimeout(() => {
    iteratee.apply(null, args);
  }, wait);
};

_.shuffle = function(list) {
  if (!Array.isArray(list) && typeof list !== 'object') return [];

  let keys = Object.keys(list);
  let length = keys.length;
  let res = Array(length);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < length; i++) {
    let random = getRandomInt(i);
    if (random !== i) {
      res[i] = res[random];
    }
    res[random] = list[keys[i]];
  }
  
  return res;
};

_.invoke = function(list, methodName) {
  let args = Array.prototype.slice.call(arguments, 2);
  
  return map(list, function(elem) {
    let func = elem[methodName];
    return func ? func.apply(elem, args) : elem[null];
  });
};

_.sortBy = function(list, sortBy) {
  let args = Array.prototype.slice.call(arguments, 2);
  let iteratee;

  if (typeof sortBy === 'string') {
    iteratee = ((elem) => {
      return elem[sortBy];
    });
  } else {
    iteratee = sortBy;
  }

  return map(list, function(elem, i, list) {
    return {
      elem: elem,
      computed: iteratee.call(args, elem, i, list)
    };
  }).sort(function(a, b) {
    return a.computed > b.computed;
  }).reduce(function(res, e) {
    res.push(e.elem);
    return res;
  }, []);
};

_.zip = function() {

};

module.exports = _;