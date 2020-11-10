function range(start, end, step) {
  var range = [];
  for (var i = 0; i <= Math.abs(end - start); i++) {
    if (step) {
      range[i] = start;
    } else {
    range[i] = start + i;
    }
  }
  return range;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));
