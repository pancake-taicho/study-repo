// Use Number(prompt()) to convert the age to a number. prompt always returns a string...
// var age = prompt("Welcome! How old are you?");
// if (age < 0) {
//   console.log("Please enter a positive number.");
// }

var age = Number(prompt("What is your age?"))

// Using the Number constructor doesn't account for edge cases where a user might enter a string (i.e. "twenty seven" instead of "27"). Inputting, for example, "twenty seven" returns NaN (Not a Number). Using a while loop, we can keep prompting the user for their age until they input a numerical value:

while(isNaN(age)) {
  age = Number(prompt("What is your age?"))
}

// You don't need all of these "else if" statements...why did you use "else if" instead of just "if"?
if (age < 18) {
  console.log("Sorry, you are not old enough to enter.");
}

else if (age < 21) {
  console.log("You can enter, but cannot drink.");
}

// You want to always try to use === instead of == in JavaScript. That way you are very explicit about what you want and you aren't leaving it up to the program to decide data types for you.
if (age === 21) {
  console.log("Happy 21st birthday!");
}
else {
  console.log("Come on in. You can order drinks at the bar.");
}

if (age % 2 !== 0) {
  console.log("Your age is an odd number.");
}

// E for effort on the for loop; something's broken, it only works on some square roots but not others...

// for (i = 0; i <= 11; i++) {
//   if (i * i == age) {
//     console.log("Perfect square!");
//   }
//   else {
//     i++;
//   }
// }

// Use the Math.sqrt() function from the Math library, like so:
if(age % Math.sqrt(age) === 0) {
   console.log("Your age is a perfect square!");
}

// The above formula uses modulo (%) to see if the age is a perfect square. In other words, is the age equal to a WHOLE number times itself (as opposed to a FLOATING number times itself). 
// Another way to check if the age is a perfect square is to plug age into Math.sqrt and see if the answer contains a decimal (.). If it does, then we know that the age is not a perfect square:
var num = Math.sqrt(age);

// num.includes('.');
// This will return an error, because 'includes()' requires a string, not a number. So we have to convert the number into a string:
// num = num + '';
// Adding empty quotes to a number converts it to a string. Now we can use contains() to check if the square root of the age contains a decimal point.

if (!(Math.sqrt(age) + '').includes('.')) {
    console.log("Your age is a perfect square!");
};

// And yet a slightly less verbose solution that converts the num to a string using String instead of adding '':

if (!String(Math.sqrt(age)).includes('.')) {
  console.log("Your age is a perfect square!");
}

// And a more refined solution of the original solution: Because 0 is a falsy value (!0 = true and !!0 = false), instead of === 0 at the end of the function we can wrap the function in a ! and check falseness that way. So:
//
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// } 
// becomes:

if(!(age % Math.sqrt(age))) {
  console.log("Your age is a perfect square!");
}