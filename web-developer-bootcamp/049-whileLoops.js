// counter might be a better variable name than num because it's more explicit...

console.log("PRINT ALL NUMBER BETWEEN -10 AND 19");
var num = -10;
while(num <= 19) {
  console.log(num);
  num++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10;
while(num <= 40) {
  console.log(num);
  num += 2;
}

// Alternative solution:
//
// var num = 10;
// while(num <= 40) {
//   if(num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }
// This solution is actually a little bit better than the above solution since it actually checks if each number is divisible by 2, whereas the first solution just counts up by 2. This works fine ASSUMING the variable num is initialized as an even number. If num had been 11 or any other odd number, though, the code would fail.

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
var num = 300;
while (num <= 333) {
  if(!(num % 2 === 0)) {
    console.log(num);
  }
  num++;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var num = 5;
while (num <= 50) {
  if(num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}
