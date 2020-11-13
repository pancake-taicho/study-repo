// MY SOLUTION 

// Again, trying to assume what kind of code the book wants.
// The evenCheck function wrapped in the isEven function is redundant.

function isEven(number) {
  function evenCheck(number) {
    if (number % 2 === 0)
      return true;
    else if (number === 1)
      return false;
    else if (number < 0)
      return evenCheck(number*number);
    else 
      return evenCheck(number - 2);
    }
  return evenCheck(number);
}

console.log(isEven(1));
// -> false
console.log(isEven(50));
// -> true
console.log(isEven(75));
// -> false
console.log(isEven(0));
// -> true
console.log(isEven(-1));
// -> false
console.log(isEven(-4));
// -> true

/* 

SOLUTION IN EJS:

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

*/