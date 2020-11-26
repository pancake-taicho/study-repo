// alert("I'm JavaScript!");

// ------------------------------------------------------------

// let name = "John";
// let admin = name;

// alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "Mike";

// ------------------------------------------------------------

// let name = "Ilya";
// alert(`Hello, ${name}!`); 
// alert(`Hello, ${"name"}!`);
// alert(`Hello, ${1}!`);

// ------------------------------------------------------------

// let userName = prompt("What is your name, user?");
// let nameIsCorrect = confirm(`Your name is ${userName}, right?`);
// alert(`Your name is ${userName}!`);

// ------------------------------------------------------------

// let jsName = prompt("What is the official name of JavaScript?", "");
// if (jsName == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? It's ECMAScript.");
// }

// ------------------------------------------------------------

// let num = prompt("Type in a number"); <-- need to reprompt if anything but a number is input
// if(num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// ------------------------------------------------------------

// let result = (a + b < 4) ? 'Below' : 'Over';

// ------------------------------------------------------------

// let login = prompt("Enter login");

// let message = (login == 'Employee') ? 'Hello':
//   (login == 'Director') ? 'Greetings':
//   (login == '') ? 'No login':
//   '';

// alert(message);

// ------------------------------------------------------------

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

// ------------------------------------------------------------

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

// function pow(x, n) {
//   let result = x;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt('Enter x');
// let n = prompt('Enter n');

// if (n < 1) {
//   n = prompt(`Power ${n} is not supported. Please input a positive integer for \'n\':`)
// } else {
//   alert( pow(x, n) );
// }
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();  
// }

// function showOk() {
//   alert('You agreed.');
// }

// function showCancel() {
//   alert('You canceled the execution.');
// }

// //usage: functions showOk, showCancel are passed as arguments to ask
// ask('Do you agree?', showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask('Do you agree?',
//   function() {alert('You agree.');},
//   function() {alert('You canceled the execution.')}
// );

// ------------------------------------------------------------
// FUNCTION DECLARATION VS FUNCTION EXPRESSION
// ------------------------------------------------------------

// FUNCTION DECLARATION:
// sayHi('John'); // <--this works because the JS engine builds all global functions before execution

// function sayHi(name) {
//   alert(`How do you do, ${name}?`);
// }

// FUNCTION EXPRESSION:

// sayHi('John');

// let sayHi = function(name) {
//   alert(`How do you do, ${name}?`);
// }; // <-- this won't work because function expressions are built when the execution reaches them, not before

// let age = prompt('What is your age?');

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert('Welcome, kiddo!');
//   };
// } else {
//     welcome = function() {
//       alert('All grown up!');
//     };
// }

// welcome();

// simplified:

// let age = prompt('What is your age?', '');

// let welcome = (age < 18) ?
//   function() { alert('Hello!');} :
//   function() { alert('Greetings!'); };

// welcome();

// ------------------------------------------------------------

// ARROW FUNCTIONS:

// let age = prompt('What is your age?', 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert('Greetings!');

// welcome();

// ------------------------------------------------------------

// ARROW FUNCTION WITH MULTIPLE LINES (USES CURLY BRACES AND A RETURN):

// let add = (a, b) => { // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, we need an explicit 'return'
// };

// alert(add(1, 3));

// replace function expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask('Do you agree?',
//   function() { alert('You agree.');},
//   function() { alert('You canceled the execution.')}
// );

// now with arrow functions:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// };

// ask('Do you agree?',
//   () => alert('You agree.'),
//   () => alert('You canceled the execution.')
// );

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//   for (let prop in obj) {
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for(let prop in salaries) {
//   sum += salaries[prop];
// }

// alert(sum);

// finding sum with a function:
// function salarySum(obj) {
//   let sum = 0;
//   for (let prop in obj) {
//     sum += obj[prop];
//   }
//   return sum;
// }

// console.log(salarySum(salaries));

// function multiplyNumeric(obj) {
//   for (let prop in obj) {
//     if (typeof obj[prop] == "number") {
//       obj[prop] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// console.log(menu);

// ------------------------------------------------------------

// CLONING AN OBJECT:

// let user = {
//   name: "John",
//   age: 30,
// }

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// console.log(clone);
// clone.name = "Mike";
// console.log(clone);

// ------------------------------------------------------------

// OBJECT.ASSIGN:

// let user = { name: "John" }
// console.log(user);

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: false };

// Object.assign(user, permissions1, permissions2);
// console.log(user);

// // reassign properties with Object.assign:

// Object.assign(user, { name: "Pete" });
// console.log(user);

// // use Object.assign to replace a for...in loop for simple cloning:

// let clone = Object.assign({}, user);
// console.log(clone);
// // copies all properties of 'user' into empty object and returns it

// ------------------------------------------------------------

// NESTED CLONING:

// let user = {
//   name: "John",
//   age: 30,
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// alert(user.sizes.height); // 182

// let clone = Object.assign({}, user);
// console.log(clone.sizes === user.sizes);

// user.sizes.width++; // 50 -> 51
// console.log(clone.sizes.width); // also 51, is simply referring to the data in 'user'

// For true deep cloning, using a recursive loop (how?) or 
// _.cloneDeep(obj) function from lodash (there are other libraries that can deep clone)

// ------------------------------------------------------------

// ROW SUM OF ODD NUMBERS:

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

// const rowSumOddNumbers = n => Math.pow(n, 3);

// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(42));

// ------------------------------------------------------------

// KEYWORD 'THIS':

// let user = { name: "John" };
// let admin = { name: "Admn" };

// // let sayHi = () => alert(this.name); <-- doesn't work

// function sayHi() {
//   alert(this.name);
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different 'this'
// // 'this' inside the function is the object 'before the dot'
// user.f();
// admin.f();

// admin['f']();

// an arrow function's 'this' is taken from the outer 'normal' function:

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya

// ------------------------------------------------------------

// TASK: USING 'THIS' IN OBJECT LITERAL:

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // What's the result?
// // Error: Cannot read property 'name' of undefined
// // doesn't work because 'this' is called as a function and not a method with dot syntax

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name );
// // works because user.ref() is a method and 
// // the value of 'this' is set to the object before the dot

// ------------------------------------------------------------

// TASK: CREATE A CALCULATOR

// my solution:
// let calculator = {
//   read() {
//     let a = prompt("Enter input 'a'");
//     let b = prompt("Enter input 'b'");
//     return this.input1 = +a, this.input2 = +b;
//   },

//   sum() {
//     return this.input1 + this.input2;
//   },

//   mul() {
//     return this.input1 * this.input2;
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// tutorial solution:

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ------------------------------------------------------------

// TASK: CHAINING

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() {
//     alert( this.step ); // shows the current step
//   }
// };

// // to make several calls in sequence, you can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// // but we can also make the calls chainable, like this:

// ladder.up().up().down().showStep(); // 1
// // this approach is widely used across JS libraries

// ------------------------------------------------------------

// TASK: TWO FUNCTIONS - ONE OBJECT:

// Is it possible to create functions A and B such that
// new A() == new B()?

// Yes, it is. If a function returns an object then 
// 'new' returns that object instead of 'this'.
// So they can, for instance, return the same externally
// defined object.

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true

// ------------------------------------------------------------

// TASK: CREATE NEW CALCULATOR

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a?', '0');
//     this.b = +prompt('b?', '0');
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }

//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );

// ------------------------------------------------------------

// TASK: CREATE NEW ACCUMULATOR

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.newValue = +prompt('new value?', '0');
//     return this.value += this.newValue;
//   }
// }

// let accumulator = new Accumulator(+prompt('starting value?', '0')); // prompts for initial value
// alert(accumulator.value);

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

// ------------------------------------------------------------

// let user = {
//   name: "John",
//   money: 1000,

//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   valueOf() {
//     return this.money;
//   }
// };

// let user2 = {
//   name: "Bob",
//   money: 1500,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// alert(user2);
// alert(+user2);
// alert(user2 + 500);
// alert(user2 + " Hello!");

// ------------------------------------------------------------

// CALLING A METHOD WITH DOUBLE-DOT NOTATION: 

// alert( 12345..toString(16));

// TASK: SUM TWO NUMBERS

// let a = +prompt('Enter first number', '');
// let b = +prompt('Enter second number', '');

// alert( a + b );

// ------------------------------------------------------------

// TASK: REPEAT UNTIL THE INPUT IS A NUMBER

// function readNumber() {
//   let num = +prompt('Enter a number', '');
//   while (isNaN(num)) {
//     num = +prompt('Please enter a number', '');
//   }
//   if(!isNaN(num)) {
//     return alert(num);
//   } else {
//     return null;
//   }
// }

// readNumber();

/* 

TUTORIAL'S SOLUTION:

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number, please.", 0);
  } while ( !isFinite(num) );

  if ( num === null || num === '' ) return null;
  
  return +num;
}

alert( `Read: ${readNumber()}`);

*/

// ------------------------------------------------------------

// TASK: A RANDOM NUMBER FROM MIN TO MAX

// function random(min, max) {
//   let randomNum = Math.random() * (max - min) + min;
//   return alert(randomNum);
// }

// random(1, 5);

// function randomInteger(min, max) {
//   let num = Math.floor(Math.random() * (max - min + 1) + min);
//   return alert(num);
// }

// randomInteger(1, 5);

/*

// TUTORIAL SOLUTION 1:

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 3));

// TUTORIAL SOLUTION 2:

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomIntger(1 ,3));

*/

// ------------------------------------------------------------

// TASK: UPPERCASE THE FIRST CHARACTER

// MY SOLUTION:

// function ucFirst(str) {
//   str = str[0].toUpperCase() + str.slice(1);
//   return alert(str);
// }

// TUTORIAL SOLUTION:

// function ucFirst(str) {
//   if (!str) return str; 
//   // need to check for an empty string to avoid error from
//   // calling .toUpperCase() on a string element that doesn't exist ('undefined')

//   return sr[0].toUpperCase() + str.slice(1);
// }

// let testStr = "john";
// ucFirst(testStr);

// ------------------------------------------------------------

// TASK: CHECK SPAM

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   alert(lowerStr);
//   return alert(lowerStr.includes('viagra') || lowerStr.includes('xxx'));
// }

// let testStr = "ViAgRa";
// let testStr2 = "free xxxxx";
// let testStr3 = "innocent penguin";
// checkSpam(testStr);
// checkSpam(testStr2);
// checkSpam(testStr3);

// ------------------------------------------------------------

// TASK: TRUNCATE THE TEXT

// MY SOLUTION:

// function truncate(str, maxlength) {
//   if (str.length <= maxlength) {
//     return str;
//   } else {
//     let truncStr = str.slice(0, maxlength - 1) + '\u2026';
//     return truncStr;
//   }
// }

// TUTORIAL SOLUTION:

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// let testStr = "Hey! You!";
// let testStr2 = "Supercalifragilisticexpialidocious";
// truncate(testStr, 20);
// truncate(testStr2, 20);

// ------------------------------------------------------------

// TASK: EXTRACT THE MONEY

// MY SOLUTION:

// function extractCurrencyValue(cost) {
//   return Number(cost.slice(1));
// }

// TUTORIAL SOLUTION:

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// let testCost = "$120";
// alert( extractCurrencyValue(testCost) === 120);

// ------------------------------------------------------------

// TASK: IS ARRAY COPIED?

// let fruits = ['Apple', 'Orange', 'Pair'];

// // Push a new value into the copy
// let shoppingCart = fruits;
// shoppingCart.push('Banana');

// // What's in fruits now?
// alert( fruits.length );
// // -> 4

// Because arrays are objects, and 'shoppingCart' and 'fruits' are
// references to the same array, 'fruits' reflects 'shoppingCart'

// ------------------------------------------------------------

// TASK: ARRAY OPERATIONS

// Create an array 'styles' with items 'Jazz' and 'Blues'
// let styles = ['Jazz', 'Blues'];
// alert(styles);

// // Append 'Rock-n-Roll' to the end
// styles.push('Rock-n-Roll');
// alert(styles);

// // Replace the value in the middle with 'Classics'.
// // Your code for finding the middle value should work with arrays of odd length.
// styles[Math.floor((styles.length - 1 )/ 2)] = 'Classics';
// alert(styles);

// // Strip off the first value of the array and show it
// alert(styles.shift());
// alert(styles);

// // Prepend 'Rap' and 'Reggae' to the array
// styles.unshift('Rap', 'Reggae');
// alert(styles);

// ------------------------------------------------------------

// TASK: CREATE AN ARRAY IN CONTEXT

// What is the result? Why?
// let arr = ['a', 'b'];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?
// -> a,b,function() {...}

// The call 'arr[2]()' is syntactically 'obj[method]()'.
// 'arr' is in the role of 'obj' and [2] is in the role of 'method'.
// The call of the function 'arr[2]()' is an object method, and it
// receives 'this' referencing 'arr' and outputs the array.

// ------------------------------------------------------------

// TASK: SUM INPUT NUMBERS

// **FAILED: I COULDN'T FIGURE OUT THE CONDITIONAL WITHOUT LOOKING AT THE SOLUTION**

// DOESN'T WORK:
// function sumInput() {
//   let nums = [];
//   let input = 0;
//   let sum = 0;
//   do {
//     input = prompt('Please enter a number to add');
//     nums.push(+input);
//   }
//   while (isNan(+input));
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return alert(sum);
// }

// sumInput();

// TUTORIAL SOLUTION:

// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt('A number, please', '0');

//     // Should we cancel?
//     if (value === '' || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// ------------------------------------------------------------

// TASK: A MAXIMAL SUBARRAY

//  MY SOLUTION:

// function getMaxSubSum(arr) {
//   let currentSum = 0;
//   let maxSum = 0;
//   console.log(maxSum);
//   for (let i = 0; i < arr.length; i++) {
//     if (currentSum + arr[i] >= 0) {
//       currentSum += arr[i];
//     } else if (currentSum + arr[i] < 0) {
//       currentSum = 0;
//     }
//     console.log(currentSum);
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       console.log(maxSum);
//     }
//   }
//   return alert(maxSum);
// }

// let testArr = [-1, 2, 3, -9];
// let testArr2 = [2, -1, 2, 3, -9];
// let testArr3 = [-1, 2, 3, -9, 11];
// let testArr4 = [-2, -1, 1, 2];
// let testArr5 = [100, -9, 2, -3, 5];
// let testArr6 = [1, 2, 3];


// getMaxSubSum(testArr); 
// // 5
// getMaxSubSum(testArr2); 
// // 6
// getMaxSubSum(testArr3); 
// // 11
// getMaxSubSum(testArr4); 
// // 3
// getMaxSubSum(testArr5); 
// // 100
// getMaxSubSum(testArr6); 
// // 6

/*

currentSum (to keep track of current sum) = 0
maxSum (to keep track of maximum sum and compare current sum to it) = 0

loop through array starting with 1st val

if currentSum is greater than or equal to 0:
  add current val to currentSum
  if currentSum is greater than maxSum
    maxSum get currentSum
else 
  currentSum is set to 0
  maxSum is set to 0
  continue loop through array

return maxSum

*/

// TUTORIAL SOLUTION:

// function getMaxSubArray(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }

// ------------------------------------------------------------
// ARRAY METHODS
// ------------------------------------------------------------

// SPLICE:

// // for deletion:

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert(arr); // ["I", "JavaScript"]

// // replace and remove:

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // from index 0 remove 3 elements and replace them
// arr.splice(0, 3, "Let's", "dance"); 

// alert(arr); // now ["Let's", "dance", "right", "now"]

// // returning an array of the removed elements

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove first two elements and assign them to a variable
// let returned = arr.splice(0, 2);

// alert(removed); // "I","study" <--- array of removed elements

// // insert elements without any removal:

// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// alert(arr); // "I","study","complex","language","JavaScript"

// // negative indexes are allowed.
// // they specify the position from the END of the array:

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4); // 1,2,3,4,5

// ------------------------------------------------------------

// SLICE:

// // slice returns a copy of a subarray from a start index to an
// // end index (not included):
// let arr = ["t", "e", "s", "t"];

// alert(arr.slice(1, 3)); // e,s (copy of 1 to 3, not including 3)

// // negative indexes are allowed.
// // they specify the start index from the END of the array:
// alert(arr.slice(-2)); // s,t (copy from -2 till then end)

// // slice without arguments makes a copy of the original array
// // without changing it
// let arr = [1, 2, 3, 4, 5];

// let arrCopy = arr.slice();

// alert(arrCopy); // 1,2,3,4,5
// alert(arr); // 1,2,3,4,5

// ------------------------------------------------------------

// CONCAT:

// // creates new array that includes values from other arrays
// // and additional items:
// let arr = [1, 2];

// // create an array from: arr and [3, 4]
// alert(arr.concat([3, 4])); // 1,2,3,4 (copied whole array of [3 ,4])

// // create an array from: arr, [3, 4], and [5, 6]
// alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// // create an array from: arr and [3, 4], then add 5 and 6
// alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// // normally, only elements from arrays get copied,
// // but other objects, even if they look like arrays, 
// // are added as a whole:
// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1,
// };

// alert(arr.concat(arrayLike)); // 1,2,[object Object]

// // but if an array-like object has a special 'Symbol.isConcatSpreadable'
// // property, then it's treated as an array and its elements are added:
// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };

// alert( arr.concat(arrayLike) ); // 1,2,something,else

// ------------------------------------------------------------
// ITERATE
// ------------------------------------------------------------

// FOREACH:

// // arr.forEach allows to run a function on each element of an array:
// arr.forEach(function(item, index, array) {
//   // ...do something with item...
// });

// // show each element of an array:
// // for each element call alert
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// // a more elaborate code about their positions in the target array:
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });

// // the result of function (if it returns any) is thrown away
// // and ignored (garbage collected?)

// ------------------------------------------------------------
// SEARCHING IN ARRAY
// ------------------------------------------------------------

// INDEXOF/LASTINDEXOF AND INCLUDES:

// // same as str counterparts but works on array items instead of characters.

// // arr.indexOf(item, from) - looks for 'item' starting from index 'from',
// // and returns the index where it was found, otherwise it returns -1

// // arr.lastIndexOf(item, from) - same but searches from left to right

// // arr.includes(item, from) - looks for 'item' starting at index 'from'
// // and returns 'true' if found

// let arr = [1, 0, false];

// alert( arr.indexOf(0)); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1 (doesn't exist in arr)
// alert( arr.includes(1) ); // true

// // note that these methods use === for comparison, so if you look for 
// // 'false' they will find exactly 'false' and not '0'

// // to check for inclusion, but you don't know the exact index,
// // arr.includes is preferred

// // includes correctly handles NaN, unlike indexOf and lastIndexOf:
// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
// alert( arr.includes(NaN) ); // true (correct)

// ------------------------------------------------------------

// FIND AND FINDINDEX:

// // arr.find(fn) finds an item with a specific condition:
// let result = arr.find(function(item, index, array) {
//   // if true is return, item is returned and iteration stops
//   // for falsy scenario, returns 'undefined'
// });

// // function is called for elements of the array, one after another:
// // 'item' is the element
// // 'index' is the index
// // 'array' is the array
// // if it returns 'true', the search is stopped, 'item' is returned,
// // if nothing is found, 'undefined' is returned

// // example: we have an array of users, each with an 'id' and a 'name'.
// // let's find the one with id == 1:
// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mark"}
// ];

// let user = users.find(item => item.id == 1);

// alert(user.name); // John

// // the arr.findIndex method is essentially the same, but it returns the index
// // where the element was found instead of the element itself, -1 if not found

// ------------------------------------------------------------

// FILTER: 

// // the 'find' method looks for a single (the first) element that makes the 
// // function return 'true'.
// // if we need to find many elements, we can use arr.filter(fn)
// // the syntax is similar to 'find', but 'filter' returns an array of 
// // matching elements

// let results = arr.filter(function(item, index, array) {
//   // if true, the item is pushed to results and the iteration continues
//   // returns an empty array if nothing is found
// });

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// // returns an array of the first two users
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

// ------------------------------------------------------------
// TRANSFORM AN ARRAY
// ------------------------------------------------------------

// MAP:

// // arr.map calls the function for each element of the array and returns
// // an array of the results
// let result = arr.map(function(item, index, array){
//   // returns the new value instead of item
// });

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// alert(lengths); // 5,7,6

// ------------------------------------------------------------

// SORT(FN):

// // arr.sort sorts the array IN PLACE, changing its element order.
// // it also returns the sorted array, but the returned value is usually
// // ignored since arr itself is modified

// let arr = [1, 2, 15];

// // the method reorders the content of arr
// arr.sort();

// // by default, arr.sort sorts the items as strings, so "15" < "2"
// alert( arr ); // 1,15,2

// // to use our own sorting order, we need to supply a function
// // as the argument of arr.sort.

// // the function should compare two arbitrary values and return:
// function compare(a, b) {
//   if (a > b) return 1; // if the first value is greater than the second
//   if (a == b ) return 0; // if both values are equal
//   if (a < b) return -1; // if the second value is greater than the first
// }

// // for example, to sort as numbers:
// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b ) return 0;
//   if (a < b) return -1;
// }
// let arr = [1, 2, 15];

// arr.sort(compareNumeric);

// alert(arr); // 1, 2, 15

// // arr.sort impelements a generic sorting algorithm, usually 'quicksort' or
// // 'Timsort'

// // you can see which elements are being compared by alerting them:
// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + "<>" + b);
//   return a - b;
// });

// // the algorithm may compare an element with multiple others, but it tries
// // to make as few comparisons as possible

// // a comparison function may return any number.
// // it is only required to return a positive number to indicate 'greater'
// // and a negative number to say 'less'.
// // this allows shorter functions:
// let arr = [1, 2, 15];

// arr.sort( function(a, b) { return a - b; });

// alert(arr); // 1, 15, 2

// // arrow functions for neater code. this is the same as above:
// arr.sort( (a, b) => a - b );

// // use 'localeCompare' for strings.
// // string comparison algorithm compares letters by their codes by default.
// // for many alphabets, it's better to use the str.localCompare method 
// // to sort letters correctly, such as Ö

// // sorting countries in German:
// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// // incorrect sorting
// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich

// // correct sorting
// alert( countries.sort( (a, b) => a.localeCompare(b) ) ); //Andorra, Österreich, Vietnam

// ------------------------------------------------------------

// REVERSE: