// MY SOLUTION, VERY CLUNKY:

function range(start, end, step) {
  var range = [];
  var rangeValue = (end - start);
  if (arguments.length == 2 || step == 0) {
    step = 1;
  }
  if (arguments.length == 2 && rangeValue < 0) {
    step = -1;
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

function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(sum(range(1, 10)));

/*

SOLUTION IN EJS:

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// -> [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// -> 55

*/