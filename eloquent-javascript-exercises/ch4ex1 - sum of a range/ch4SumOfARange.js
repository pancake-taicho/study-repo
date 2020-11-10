function range(start, end) {
  var sum = [];
  for (var i = 0; i <= (end - start); i++) {
    sum[i] += i;
  }
  return sum;
}

console.log(range(1, 10));1