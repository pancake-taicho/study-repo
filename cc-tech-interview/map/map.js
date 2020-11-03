/*
Declare a function 'map'.

'map' takes two inputs:
  1. a collection (object or array) and
  2. a callback function.

'map' returns a new array containing the results of running 
the callback function on every element in the collection.

You should not use native methods (.forEach, .map).

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets

*/

function map(collection, banana) {
  var newArray = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      newArray.push(banana(collection[i]));
    }
  return newArray;
  }
  for (let prop in collection) {
    newArray.push(banana(collection[prop]));
  }    
  return newArray;
}

// Your code here

// Tests

let testArray = [1, 2, 3];
let resultArray = [2, 3, 4];

function addOne(num) {
  return num + 1;
}

let actual = map(testArray, addOne);
let expected = resultArray;

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

let testObject = { a: 1, b: 2, c: 3 };
actual = map(testObject, addOne);
expected = resultArray;

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}