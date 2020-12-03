var add = function(a) {
  return function(b) {
    return a + b;
  }
};

var addToFive = add(5);
// 'addToFive' executes add with 5 passed in and returns the inner function of 'add'
// so the 'addToFive' function is essentially:

// function(b) {
//   return 5 + a;
// }

console.log(addToFive(1)); // 6
// when we pass in 1, 'addToFive' becomes:
// function(1) {
//   return 5 + 1;
// } 

var avg = function(...n) { // the ... is the spread operator
    let total = 0;
  for (let i = 0; i < n.length; i += 1) {
    total += n[i];
  }
  return total/n.length;
}

var spiceUp = function(fn, ...n) {
  return function(...m) {
    return fn.apply(this, n.concat(m));
  }
}

var doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg)