function rowSumOddNumbers(n) {
  var value = (n*n) - (n-1);
  for(var i = 0; i < (value - 1); i++) {
    value += 2; // <- problem here
  }
  return value;
}

rowSumOddNumbers(1);
// rowSumOddNumbers(42);