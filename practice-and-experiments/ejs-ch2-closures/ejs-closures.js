// ex. 1
function wrapValue(n) {
  var localVariable = n;
  return function() {return localVariable * 2;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
// -> 2
console.log(wrap2());
// -> 4

// ex. 2
function multiplier(factor) {
  return function(number) {
    return factor * number;
  }
}

var thrice = multiplier(3);

console.log(thrice(4));
// -> 12  

// ex. 3 (my original closure function)
function divideBy(divisor) {
  return function(dividend) { return dividend/divisor; }
}

var divideByThree = divideBy(3);

console.log(divideByThree(12));
// -> 4