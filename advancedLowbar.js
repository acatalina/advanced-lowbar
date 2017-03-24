const {map, reduce, contains} = require('./lowbar');
const _ = {};

_.getIteratee = function getIteratee(method) {
  switch (typeof method) {
    case 'function':
      return method;
    case 'string':
      return function(elem) {
        return elem[method];
      };
    default: 
      return function(elem) {
        return elem;
      };
  }
};

_.indexOf = function(arr, val, isSorted) {
  if (!Array.isArray(arr) || !val) return -1;

  if (isSorted === true) {
    let prevIndex = 0;
    let endIndex = arr.length;
    let midIndex;

    while (prevIndex < endIndex) {
      midIndex = Math.floor((prevIndex + endIndex) / 2);
      
      if (arr[midIndex] > val) {
        endIndex = midIndex;
      } else {
        prevIndex = midIndex + 1;
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

_.sortBy = function(list, sortBy, context) {
  let iteratee = _.getIteratee(sortBy).bind(context);

  return map(list, function(elem, i, list) {
    return {
      elem: elem,
      computed: iteratee(elem, i, list)
    };
  }).sort(function(a, b) {
    return a.computed > b.computed;
  }).reduce(function(res, e) {
    res.push(e.elem);
    return res;
  }, []);
};

_.zip = function() {
  let args = Array.prototype.slice.call(arguments, 0);
  let res = [];
  
  for (let i = 0; i < args.length; i++) {
    if (!Array.isArray(args[i])) break;

    let newArray = [];

    for (let j = 0; j < args.length; j++) {
      newArray.push(args[j][i]);
    }
    
    newArray.length > 0 ? res.push(newArray) : null;
  }

  return res;
};

_.sortedIndex = function(list, value, iteratee, context) {
    if (!Array.isArray(list)) return 0;

    let prevIndex = 0;
    let endIndex = list.length;
    let func = _.getIteratee(iteratee).bind(context);

    while (prevIndex < endIndex) {
      let midIndex = Math.floor((prevIndex + endIndex) / 2);
      
      if (func(list[midIndex]) > func(value)) {
        endIndex = midIndex;
      } else {
        prevIndex = midIndex + 1;
      }
    }
    
    return endIndex;
};

_.flatten = function(arr, shallow) {  
  if (!Array.isArray(arr)) return [];

  return reduce(arr, function(res, elem) {
    if (Array.isArray(elem) && !shallow) {
      elem = _.flatten(elem);
    }
    
    return res.concat(elem);
  }, []);
};

_.intersection = function() {
  let length = arguments[0] ? arguments[0].length : 0;
  let res = [];
  
  for (let i = 0; i < length; i++) {
    let elem = arguments[0][i];
    
    for (let j = 1; j < arguments.length; j++) {
      let isCommon = contains(arguments[j], elem);
      let notSeen = isCommon ? !contains(res, elem) : false; 
      
      if (isCommon && notSeen) {
        res.push(elem);
      }
    }
  }

  return res;
};

_.difference = function(arr) {
  let length = arr ? arr.length : 0;
  let res = [];
  
  for (let i = 0; i < length; i++) {
    let elem = arr[i];
    
    for (let j = 1; j < arguments.length; j++) {
      let isNotCommon = !contains(arguments[j], elem);
      
      if (isNotCommon) {
        res.push(elem);
      }
    }
  }

  return res;
};

_.throttle = function(iteratee, wait, options) {
  let readyToUse = true;
  let reCalled;
  let res;

  return function() {
    if (readyToUse) {
      readyToUse = false;
      res = iteratee.apply(this, arguments);
      setTimeout(() => {
        readyToUse = true;
        if (reCalled) {
          res = iteratee.apply(this, arguments);
          reCalled = false;
        }
      }, wait);
    } else {
      reCalled = true;
    }
    
    return res;
  };
};

module.exports = _;