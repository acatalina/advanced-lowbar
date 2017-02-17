var _ = {};
module.exports = _;

_.indexOf = function(arr, val, isSorted) {
  if (!isSorted) {
    arr.sort(function(a, b) {
      return a - b;
   });
  }
  var midIndex = Math.floor(arr.length / 2);
  var startIndex = 0;
  var prevIndex = 0;
  var endIndex = arr.length;

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
};

_.indexOf([1, 2, 3], 4);