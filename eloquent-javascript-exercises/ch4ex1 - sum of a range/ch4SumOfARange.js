function range(start, end, step) {
  var range = [];
  var rangeValue = (end - start);
  if (arguments.length == 2 || step == 0) {
    step = 1;
  }
  if (step > 0) {
    for (var i = 0; i <= rangeValue; i++) {
      range.push(start);
      start += step;
    }
  }
  if (step < 0) {
    for (var i = 0; i >= rangeValue; i--) {
      range.push(start);
      start += step;
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
