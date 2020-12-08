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

// let arr = [1, 2, 3, 4, 5];

// arr.reverse();

// alert( arr ); // 5,4,3,2,1

// // 'reverse' also returns array 'arr' after the reversal

// ------------------------------------------------------------

// SPLIT AND JOIN:

// // the 'split()' method method divides a string into an ordered list of substrings,
// // puts those substrings into an array, and returns the array.
// // the division is done by searching for a pattern, where the pattern is 
// // provided as the first parameter in the method's call.

// let names = "Bilbo, Gandalf, Nazgul";

// let arr = names.split(', ');

// for ( let name of arr) {
//   alert( `A message for ${name}.` ); // A message for Bilbo. (and other names)
// }

// // the 'split' method has a second optional numeric argument for indicating
// // the array length. if it is provided then the extra elements are ignored.
// // rarely used in practice, though.

// let arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);

// alert( arr ); // Bilbo, Gandalf

// // split into letters:
// // the call to split(s) with an empty 's' ( split('') ) would split the
// // string into an array of letters

// let str = 'test';

// let arr = str.split(''); // t,e,s,t

// // join:
// // the 'join()' method does the reverse of 'split()'. it creates and returns
// // a new string by concatenating all of the elements in an array 
// // (or an array-like object), separated by commas or a specified seperator
// // string. if the array has one item, then that item will be return without
// // using the seperator.

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let str = arr.join(); 
// alert( str ); // BilboGandalfNazgul

// str = arr.join(';'); // 'glue' the elements together with ;
// alert( str ); // Bilbo;Gandalf;Nazgul

// ------------------------------------------------------------

// REDUCE/REDUCERIGHT:

// // when we need to iterate over an array we can use 'forEach', 'for',
// // or 'for...of...'.

// // when we need to iterate and return data for each element, we can
// // use 'map'.

// // the methods arr.reduce() and arr.reduceRight() also belong to that 
// // breed, but are a little more intricate. they are used to calculate
// // a single value based on the array.

// // syntax:
// let value = arr.reduce(function(accumulator, item, index, array) {
//   //...
// }, [initial]);

// // the function is applied to all array elements one after another and
// // 'carries on' its result to the next call.

// // arguments:
// // 'accumulator' is the result of the previous function call, equals
// // the 'initial' value the first time (if an 'initial' value is provided).
// // 'item' is the current array item.
// // 'index' is its position.
// // 'array' is the array.

// // as the function is applied, the result of the previous function call
// // is passed to the next function call as the first argument.
// // the first argument is the combined result of all previous executions,
// // and at the end it becomes the result of 'reduce'.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert( result ); // 15

// // typically 'reduce()' takes only two args (the function and an initial value),
// // which is usually enough

// // if we call reduce in the same way, but without the initial value of 0, 
// // then the first element of the array will be used, which is 1, and iteration
// // would start from the second elemetn; the result of the 'reduce()' call would 
// // still come out to 15

// // BUT be careful of calling 'reduce()' without an initial value;
// // if you do that with an empty array, you'll get an error:

// let arr = [];

// arr.reduce((sum, current) => sum + current);
// // Error: Reduce of empty array with no initial value
// // if an initial value was provided, 'reduce()' would return it for the 
// // empty array

// // so it's advised to always specify an inital value

// // 'arr.reduceRight()' does the same thing as 'arr.reduce()' except it
// // goes from right to left

// ------------------------------------------------------------

// ARRAY.ISARRAY

// // in JavaScript, arrays are not a separate type; they are actually objects.
// // so 'typeof' doesn't help to distinguish an array from an object:

// alert( typeof {} ); // object
// alert( typeof [] ); // object

// // but since arrays are used so often, there's a method called 
// // 'Array.isArray()' that can distinguish between an array and an object.
// // it returns 'true' if the value is an array, and 'false' otherwise.

// alert( Array.isArray({}) ); // false
// alert( Array.isArray([]) ); // true

// ------------------------------------------------------------

// MOST METHODS SUPPORT 'THISARG':

// // almost all array methods that call functions - like 'find', 'filter',
// // and 'map', with a notable exception of 'sort', accept an optional
// // parameter called 'thisArg'.

// // it's rarely used, it is best to cover it for completeness.

// // syntax:
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// // ...
// // 'thisArg' is the optional last argument

// // the value of the 'thisArg' parameter becomes 'this' for 'func'

// // for example, here we'll use the 'canJoin' method of the 'army'
// // object as a filter, and 'thisArg' passes the context:

// let army = {
//   minAge = 18,
//   maxAge = 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age <= this.maxAge;
//   }
// };

// let users = [
//   {age: 16},
//   {age: 19},
//   {age: 23},
//   {age: 30}
// ];

// // find users for whom army.canJoin returns true
// let soldiers = users.filter(army.canJoin, army);

// alert( soldiers.length ); // 2
// alert( soldiers[0] ); // 19
// alert( soldiers[1] ); // 23

// // if we called users.filter with just army.canJoin as its sole
// // parameter, then army.canJoin would be called as a standalone 
// // function, with 'this = undefined', leading to an error.

// // a call to 'users.filter(army.canJoin, army)' can be replaced with
// // 'users.filter(user => army.canJoin(user) )', which does the same thing.
// // the latter is used more often since it's easier to understand for most.

// ------------------------------------------------------------

// SUMMARY:

// cheat sheet of array methods:

// -to ADD/REMOVE elements
// --> push(...items) - adds items to the end
// --> pop() - extracts an item from the end
// --> shift() - extracts an item from the beginning
// --> unshift(...items) - adds an item to the beginning
// --> splice(pos, deleteCount, ...items) - at index 'pos' deletes 'deleteCount'
//        elements and inserts 'items'
// --> slice(start, end) - creates a new array, copies elements from index 'start'
//        till 'end' (not inclusive) into it
// --> concat(...items) - returns a new array: copies all elements of the current
//        array and adds 'items' to it. If any of 'items' are in an array, then 
//        its elements are taken

// to SEARCH among elements
// --> indexOf/lastIndexOf(item, pos) - look for 'item' starting from index 'pos',
//        return the index or -1 if not found
// --> includes(value) - return 'true' if the array has the value, otherwise 'false'
// --> find/filter(func) - filter elements through the function, return first/all
//        values that make it return 'true'
// --> findIndex works like 'find' except it returns the index instead of the value

// to ITERATE over elements
// --> forEach(func) - calls 'func' for every element, doesn't return anything

// to TRANSFORM the array
// --> map(func) - creates a new array from results of calling 'func' for every
//        element
// --> sort(func) - sorts the array in place, then returns it
// --> reverse() - reverses the array in place, then returns it
// --> split/join - convert a string to an array and back
// --> reduce/reduceRight(func, initial) - calculate a single value over the array
//        by callin 'func' for each element and passing an intermediate result
//        between calls

// additionally
// --> Array.isArray(arr) checks 'arr' for being an array

// 'sort', 'reverse', and 'splice' modify the array itself

// these methods cover 99% of use cases, but there are a few others:

// -->ARR.SOME(FN)/ARR.EVERY(FN):

// arr.some(fn)/arr.every(fn) check the array.
// the function 'fn' is called on each element of the array similar to 'map'.
// if any/all results are true, returns 'true', otherwise 'false'.

// these methods behave sort of like || and && operators: if 'fn' returns a truthy
// value, 'arr.some()' immediately returns 'true' and stops iterating over the rest
// of the items; if 'fn' returns a falsy value, 'arr.every(fn)' immediately returns
// 'false' and stops iterating over the rest of the items as well.

// we can use 'arr.every()' to compare arrays:

// function arraysEqual(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
// }

// alert( arraysEqual([1, 2], [1, 2]) ); // true

// --> ARR.FILL(VALUE, START, END):

// arr.fill(value, start, end) - fills the array with repeating 'value' from index
//    'start' to 'end'

// --> ARR.COPYWITHIN(TARGET, START, END):

// arr.copyWithin(target, start, index) copies its elements from position 'start' till
// position 'end' into ITSELF, at position 'target' (overwrites existing elements)

// --> ARR.FLAT(DEPTH)/ARR.FLATMAP(FN):

// arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array

// ------------------------------------------------------------

// TASK: TRANSLATE 'border-left-width' TO 'borderLeftWidth'

// write the function 'camelize(str)' that changes dash-seperated words like
// 'my-short-string' into camel-cased 'myShortString'.
// that is: remove all dashes, each word after a dash becomes uppercased

// HINT: use 'split' to split the string into an array, transform it, and join it back

// function camelize(str) {
//   let strArray = str.split('');

//   strArray.map(function(element) {
//     if (element == '-') {
//       let dashIndex = strArray.indexOf(element);
//       let letterAfterDash = strArray[dashIndex + 1];
//       strArray.splice(dashIndex, 2, letterAfterDash.toUpperCase());
//     }
//   });

//   let newStr = strArray.join('');

//   return newStr;
// }

// alert(camelize('camel-case-has-humps'));

// TUTORIAL SOLUTION:

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into myLongWord
// }

// alert( camelize('my-long-word') );

// ------------------------------------------------------------

// TASK: FILTER RANGE

// write a function 'filterRange(arr, a, b)' that gets an array 'arr', looks for 
// elements with values higher than or equal to 'a' but lower than or equlat to'b', 
// and returns the result as an array. the function should not modify the array. 
// it should return the new array.

// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // matching values

// alert( arr ); // not modified

// TUTORIAL SOLUTION:

// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // matching values

// alert( arr ); // not modified

// ------------------------------------------------------------

// TASK: FILTER RANGE 'IN PLACE'

// write a function 'filterRangeInPlace(arr, a, b)' that takes an array 'arr'
// and removes from it all values except those that are between 'a' and 'b'.
// the test is a <= arr[i] <= b.

// function filterRangeInPlace(arr, a, b) {
//   for (let i in arr) {
//     if (!(a <= arr[i] && arr[i] <= b)) {
//       arr.splice(i, 1);
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// alert( arr );

// TUTORIAL SOLUTION:

// function filterRangeInPlace(arr, a, b) {
  
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--; // if i was removed in the current iteration, step i back to align with the array's new post-removal length
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except 1 through 4

// alert( arr ); // 3,1

// ------------------------------------------------------------

// TASK: SORT IN DECREASING ORDER

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );

// ------------------------------------------------------------

// TASK: COPY AND SORT ARRAY

// we have an array of strings 'arr'. we'd like to have a sorted copy of it,
// but keep 'arr' unimodified. 
// create a function 'copySorted(arr)' that returns such a copy.

// function copySorted(arr) {
//   arr = arr.slice();
//   let sortedArr = arr.sort((a, b) => a.localeCompare(b));
//   return sortedArr;
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// TUTORIAL SOLUTION: 

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// ------------------------------------------------------------

// TASK: CREATE AN EXTENDABLE CALCULATOR

// create a constructor function 'Calculator' that creates 'extendable'
// calculator objects.

// the task consists of two parts:

// 1.
// first, implement the method 'calculate(str)' that takes a string like '1 + 2'
// in the format 'NUMBER operator NUMBER' (space-delimited) and returns the result.
// should understand plus '+' and minus '-'.

// usage example:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// 2.
// then add the method addMethod(name, func) that teaches the calculator a new
// operation. it takes the operator 'name' and the two-argument function
// 'func(a, b)' that implements it.

// for instance, let's add the multiplication '*', division '/', and power '**':
// let powerCalc = newCalc;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// no parentheses or complex expressions in this task
// the numbers and the operators are delimited with exactly one space
// there may be error-handling if you'd like to add it

// COULDN'T SOLVE PART 2 OF THE PROBLEM, DIDN'T UNDERSTAND HOW TO IMPLEMENT
// WHAT WAS ASKED (I WAS ABLE TO GET PART 1 WORKING, THOUGH):

// function Calculator() { // PART 1
//   this.calculate = function(str) {
//     str.split().join('');
//     let a = +str[0];
//     let b = +str[4];
//     if (str[2] == "+") {
//       return a + b;
//     } else if (str[2] == "-") {
//       return a - b;
//     }
//   }
//   this.addMethod = function(name, func) { // PART 2 ???
//     if 
//   }
// }

// let calc = new Calculator;

// alert( calc.calculate("8 + 2") );

// TUTORIAL SOLUTION: 

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

/* 
i was able to solve part 1 of the problem, the part that takes a string and breaks it 
down into a simple math equation that can be evaluated and returned. 

part 2 of the task prompt was confusing to me. the tutorial solution made use of a 
'methods' method which was an object that stored the operators and their respective 
formulas. the 'addMethod' method simply wrote its arguments ('name' and 'func') into the 
'methods' object. perhaps the name 'addMethod' should have tipped me off that there might 
need to be a third method in my solution called 'methods' that would be an object that i 
could simply write new entries into via 'addMethod'. 

in my mind, though, while struggling with the problem, i don't think i would've been able to 
make that connection: it's kinda of like watching 'the sixth sense' for the first time and 
then being expected to call the ending just by picking up on all of the uses of the color 
red throughout the movie...like, that probably ain't happening with me. and whether i'm able 
to solve a tutorial problem or not, when i finally reveal the solution to myself, to either 
compare my solution or see what i wasn't grasping, it feels like watching a movie with a 
twist ending: you might be kind of impressed, but you'll probably just feel kind of dumb 
or worse, kind of tricked ('gotcha!') <-- what's up with feeling like that? that's an ego 
thing. and that's the worst because when learning something new it's important to be humble 
and be open to receive all the possible knowledge that can increase you. feeling like you 
got took isn't something to be ashamed of. however, don't let that feeling take hold; humbly 
recognize what you weren't able to recognize before and absorb that into you, get those 
experience points. accept that you're on a journey, you have a long way to go, many have 
come before you, and no, you're probably not as smart as you would like to think you are, 
but that's okay. ('gotcha': feeling an emotional response related to ego? emotional 
responses probably hinder humility and capacity to absorb new material taught in 'gotcha' 
fashion -> 'gotcha' teaching)

i was also confused when the prompt said to add a method called 'addMethod(name, func)' - at 
this point i'm thinking that the parameters i need to pass into 'addMethod' are 'name' and 
'func' - but then in the next sentence says that 'addMethod' takes the operator 'name' 
(okay, makes sense) and the two-argument function 'func(a, b)'. this confused me because I 
wasn't sure if i needed to pass 'func' or 'func(a, b)' into 'addMethod'.

as i read the prompt, i decided in my mind that i would need to write *only* two methods: 
a 'calculate' method and an 'addMethod' method; i didn't consider the possibility of 
a third 'methods' method. this is my fault. i feel uncreative and mentally stifled, unable 
to 'think outside the box' of the task prompt.

is working a real-world dev job like solving m. night shyamalan problems all the time? probably?
*/

// ------------------------------------------------------------

// TASK: MAP TO NAMES

// you have an array of 'user' objects, each with a 'user.name'. write the code that 
// converts it into an array of names.

// example:
// let john = [name: "John", age: 25];
// let pete = [name: "Pete", age: 30];
// let mary = [name: "Mary", age: 28];

// let users = [ john, pete, mary ];

// let names = /* ...your code... */

// alert( names ); // John, Pete, Mary

// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let users = [ john, pete, mary ];

// let names = users.map(item => item["name"]);

// alert( names );

// TUTORIAL SOLUTION:

// ...same as mine except:
// let names = users.map(item => item.name); // access 'name' via dot notation

// ------------------------------------------------------------

// TASK: MAP TO OBJECTS

// you have an array of 'user' objects. each one has a 'name', 'surname' and an 'id'.
// write the code to create another array from it, of objects with 'id' and 'fullName',
// where 'fullName' is generated from 'name' and 'surname'.

// example:

// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};

// let users = [ john, pete, mary ];

// let usersMapped = /* ...your code... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3}
]
*/

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // John Smith

// so actually, you need to map one array of objects to another. try using => here.
// there's a small catch, though.

// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};

// let users = [ john, pete, mary ];

// let usersMapped = users.map(obj => {
//   let mappedObj = {};
//   mappedObj.fullName = obj.name + " " + obj.surname;
//   mappedObj.id = obj.id;
//   return mappedObj;
// });

// alert(usersMapped);
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // John Smith

// TUTORIAL SOLUTION:

// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// alert(usersMapped);
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // John Smith

// please note that in the arrow function, we need to use additional brackets.
// we can't write this:

// let usersMapped = users.map(user => {
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// });

// remember, there are TWO kinds of arrow functions: one with a function body 
// (value => expression), and one with a function body (value => { }).

// here, JS would treat { as the start of a function body and not the start of an
// object. the workaround here is to wrap the brackets in a set of parentheses: ({...}).

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// now it's fine.

// ------------------------------------------------------------

// TASK: SORT USERS BY AGE

// write a function 'sortByAge(users)' that gets an array of objects with the 'age'
// property and sorts them by 'age'.

// example:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ john, pete, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// TUTORIAL SOLUTION (SAME AS MY SOLUTION):

// function sortByAge(arr) {
//   arr.sort( (a, b) => a.age - b.age );
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ john, pete, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// ------------------------------------------------------------

// TASK: SHUFFLE AN ARRAY

// write a function 'shuffle(arr)' that shuffles (randomly reorders) elements
// of the array. multiple runs of 'shuffle' may lead to different orders of elements.
// all element orders should have an equal probability.

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   let shuffledArr = [];
//   for (let i = arr.length; i > 0; i--) {
//     let min = 0;
//     let max = arr.length;
//     let randomIndex = Math.floor(min + Math.random() * (max - min));
//     shuffledArr.push(arr[randomIndex]);
//     arr.splice(randomIndex, 1);   
//   }
//   arr = shuffledArr;
//   return arr;
// }

// alert(shuffle(arr));

// TUTORIAL SOLUTION: FISHER-YATES SHUFFLE

// the idea of the Fisher-Yates shuffle is to walk the array in reverse order and 
// swap each element with a random one before it.

// let array = [1, 2, 3];

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
//     // couldn't i just be 'array.length' and in j, Math.random * i? (no '+ 1' and '- 1')

//     // swap elements array[i] and array[j]
//     // we use 'destructuring assignment' to achieve that
//     // you'll find more details about that syntax in later chapters
//     // same can be written as:
//     // let t = array[i]; array[i] = array[j]; array[j] = t;
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// alert(shuffle(array));

// ------------------------------------------------------------

// TASK: GET AVERAGE AGE

// write the function 'getAverageAge(users)' that gets an array of objects with
// property 'age' and returns the average age.

// the formula for the average is (age1 + age2 + ... + ageN) / N

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ];

// function getAverageAge(users) {
//   let totalOfAges = 0;
//   let totalUsers = users.length;
//   for (let user of users) {
//     totalOfAges += user.age;    
//   }
//   let averageAge = totalOfAges/totalUsers;
//   return averageAge;
// }

// alert(getAverageAge(users)); // 28

// TUTORIAL SOLUTION:

// when we see this problem, we want to think of the 'reduce' method, since it is
// used to iterate over an array, apply a function to each element, and return a 
// single value (in this case, we want the average age of all users).

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let users = [ john, pete, mary ];

// alert(getAverageAge(users));