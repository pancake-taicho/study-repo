function rowSumOddNumbers(n) {
  var value = (n*n) - (n-1);
  for(var i = 0; i < value; i++) {
    value += 2;
  }
  return value;
}

rowSumOddNumbers(1);
// rowSumOddNumbers(42);