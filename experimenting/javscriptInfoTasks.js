// alert("I'm JavaScript!");

// ----

// let name = "John";
// let admin = name;

// alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "Mike";

// ----

// let name = "Ilya";
// alert(`Hello, ${name}!`); 
// alert(`Hello, ${"name"}!`);
// alert(`Hello, ${1}!`);

// ----

// let userName = prompt("What is your name, user?");
// let nameIsCorrect = confirm(`Your name is ${userName}, right?`);
// alert(`Your name is ${userName}!`);

// ----

// let jsName = prompt("What is the official name of JavaScript?", "");
// if (jsName == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? It's ECMAScript.");
// }

// ----

// let num = prompt("Type in a number"); <-- need to reprompt if anything but a number is input
// if(num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//----

// let result = (a + b < 4) ? 'Below' : 'Over';

// ----

// let login = prompt("Enter login");

// let message = (login == 'Employee') ? 'Hello':
//   (login == 'Director') ? 'Greetings':
//   (login == '') ? 'No login':
//   '';

// alert(message);

// ----

/*
if (age >= 14 && age <= 90); //checks if age is between 14 and 90 inclusively
if (!(age >= 14 && age <= 90)); // checks if age is NOT between 14 and 90 inclusively
if (age < 14 || age > 90); //checks if age is NOT between 14 and 90 inclusively

if (-1 || 0) alert('first'); //runs, || finds the first truthy value (-1)
if (-1 && 0) alert('second'); // doesn't run because 0 is falsy
if (null || -1 && 1) alert('third'); //runs, -1 && 1 evaluates to true
*/

// let login = prompt('Enter login');

// if (login == 'Admin') {

//   let password = prompt('Enter your password');

//   if (password == 'TheMaster'){
//     alert('Welcome');
//     } else if (password == (''||null)) {
//       alert('Canceled');
//     } else {
//       alert('Wrong password');
//     }
    
// } else if (login == ''||null){
//   alert('Canceled');
// } else {
//   alert('I don\'t know you');
// }

/* 
  unnecessary keyPress function:
// function keyPress(e) {
//   if(e.key === 'Escape') {
//     return true;
//   }
// }
*/

// ----

// PRIME NUMBERS:
// let n = 15;

// nextPrime:
// for (let i = 2; i <= n; i++) { //for each i...
//   for (let j = 2; j < i; j++) { // find a divisor...
//     if (i % j == 0) continue nextPrime; // not a prime, continue to next i
//   }
//   alert (i); // a prime
// }

// ----

// let browser = prompt("What browser are you using?", "");

// switch(browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay, we support those browsers, too.");
//     break;
//   default:
//     alert("We hope this page looks okay!");
// }

// The above switch rewritten with "if" statements:

// if (browser == "Edge") {
//   alert ("You've got the Edge!");
// } else if (browser == "Firefox" 
//   || browser == "Safari" 
//   || browser == "Chrome" 
//   || browser == "Opera") {
//   alert ("Okay, we support those browsers, too.");
// } else {
//   alert ("We hope this page looks good!");
// }

// let a = +prompt("a?", "");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }
// if (a == 2 || a == 3) {
//   alert("2, 3");
// }

// rewrite the above if checks into a switch statement:

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2, 3");
//     break;
//   default:
//     alert("Huh?");
// }

// let age = prompt('What\'s your age?');

// function checkAge(age) {
//   return (age >= 18) ? true : confirm('Did your parents allow you?');
// }

// function checkAge(age) {
//   return (age >= 18) || confirm('Did your parents allow you?');
// }

// checkAge(age);

// let a = prompt('Input number \'a\'');
// let b = prompt('Input number \'b\'');

// function min(a, b) {
//   return (a < b) ? alert(a + ' is less than ' + b) : alert(b + 'is less than' + a);
// }

// min(a, b);

function pow(x, n) {
  let result = x;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt('Enter x');
let n = prompt('Enter n');

if (n < 1) {
  n = prompt(`Power ${n} is not supported. Please input a positive integer for \'n\':`)
} else {
  alert( pow(x, n) );
}