// ***BEGIN NOTES***

// variable declaration: introduces a new identifier (var declaration;)

// variable initialization: when you first assign a value to a variable (declaration = 'This is an initialization';)

// scope: two kinds - global scope and function scope

// global scope: global variables are accessible at all times and is visible to everything 

// function scope: only variables created within a function are only accessible inside that function
// or any nested functions

// hoisting: 
//   when the JS interpreter evaluates your code during what's called the "Creation" phase, it moves 
//     all function and variable declarations to the top of the current scope
//   variable declarations are assigned a default value of 'undefined' 
//   variables declared without a var keyword are hoisted to the global scope

// var VS let

// var: 
//   function scoped 
//   undefined when accessing a variable before it's declared

// let: 
//   block scoped 
//   ReferenceError when accessing a variable before it's declared

// let VS const

// let and const are almost exactly the same, except with const, once you've assigned a value to a variable
//   using const, you can't reassign it a new value
// variables declared with let can have their values reassigned
// variables declared with const can't have their values reassigned
// changing a property on an object that has been assigned to a const variable isn't considered a 
// reassignment; it's okay to do

// which should you use: var, let, or const?
//   the most popular opinion is that you should use const unless you know the variable is going to change, 
//   in which case, use let. using const is also a signal to your future self and any future developer that 
//   this variable shouldn't change. if it needs to change (like in a for loop), use let. var is more or less 
//   redundant and probably doesn't have to be used again.

//   the unpopular opinion is that you should never use const, since supposedly immutable variables might have 
//   to change. developers who subscribe to this opinion always use let unless they have variables that are 
//   actually constants, like _LOCATION_ = ...

// var VS let VS const:

// var:
//   function scoped
//   undefined when accessing a variable before it's declared

// let:
//   block scoped
//   ReferenceError when accessing a variable before it's declared

// const:
//   block scoped
//   ReferenceError when accessing a variable before it's declared
//   can't be reassigned

// ***END NOTES***

// -----
// scope:
// -----

// function getDate() {
//   var date = new Date(); 
  
//   function formatDate() {
//     return date.toDateString().slice(4);
//   }

//   return formatDate();
// }

// alert(getDate());
// console.log(date);

// -----
// var VS let:
// -----

// discountedPrices([100, 200, 300], .5);

// function discountedPrices (prices, discount) {
//   var discounted = [];

//   for (let i = 0; i < prices.length; i++) {
//     let discountedPrice = prices[i] * (1 - discount);
//     let finalPrice = Math.round(discountedPrice * 100)/100;
//     discounted.push(finalPrice);
//   }

//   console.log(i);
//   console.log(discountedPrice);
//   console.log(finalPrice);

//   return discounted;
// }

// -----
// hoisting:
// -----

function discountPrices (prices, discount) {
  var discounted = undefined;
  var i = undefined;
  var discountedPrice = undefined;
  var finalPrice = undefined;

  discounted = [];
  for (i = 0; i < prices.length; i++) {
    discountedPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountedPrice * 100)/100;
    discounted.push(finalPrice);
  }

  console.log(i);
  console.log(discountedPrice);
  console.log(finalPrice);

  return discounted;
}

// -----
// let VS const:
// -----

// let name = "Mike";
// const handle = "mmet";

// name = "Mikett";
// handle = "mamet"; // TypeError: Assignment to a constant variable

// const person = {
//   name: "Kim Kardashian",
// }

// person.name = "Kim Kardashian West"; // this is okay

// person = {}; // TypeError: Assignment to a constant variable