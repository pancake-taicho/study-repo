// function rowSumOddNumbers(n) {
//   var value = (n*n) - (n-1);
//   for(var i = 0; i < (value - 1); i++) {
//     value += 2; // <- problem here
//   }
//   return value;
// }

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

const rowSumOddNumbers = n => Math.pow(n, 3);

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(42));