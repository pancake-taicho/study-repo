var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
  let flattenedArray = arr.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  });
  return flattenedArray;
}

alert(flatten(arrays));