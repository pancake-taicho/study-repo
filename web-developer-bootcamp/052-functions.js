// isEven() ORIGINAL SOLUTION:

// function isEven(x) {
//   if(x % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// isEven() REFACTORED:

function isEven(x) {
  return (x % 2 === 0);
}


// factorial() ORIGINAL SOLUTION:

// function factorial(x) {
//   var answer = 0;
//   for(var i = 0; i <= x; i++) {
//     var product = x * (x - 1);
//     x--;
//     answer += product;
//   }
//   return answer;
// }

// factorial() REFACTORED:

function factorial(num) {
  var result = 1;
  // Because we're using multiplication, the order in which the numbers are multiplied
  // doesn't matter, so you don't have to go through the process of subtracting 1 from the
  // number in each instance of the looping and then multiplying by that. Just use a counter
  // and multiply as you count up to the number.
  for(var i = 2; i <= num; i++) {
    // Since result = 1 and 1 * 1 = 1, which is unnecessary, we don't have to start the 
    // i counter at 1. We can just skip to i = 2.
    result *= i;
  }
  return result;
}

// factorial() VARIATION:
// going from the opposite direction, counting down and multiplying from num instead of
// counting up to num.

// function factorial(num) {
//   if(num === 0) {
//     return 1;
//   }
//   var result = num;
//   for(var i = num-1; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }

// kebabToSnake() ORIGINAL SOLUTION:

// function kebabToSnake(str) {
//   var regex = /-/g;
//   newStr = str.replace(regex, "_");
//   return newStr;
// }

// kababToSnake() REFACTORED:

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}