/*
Declare a function 'swap'.

'swap' takes one object input.

`swap` returns a new object with each key-value pair swapped.

Keys become values and values become keys.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

// Your code here

function swap(Object) {
  var newObject = {};
  for (let prop in Object) {
    newObject[Object[prop]] = prop;
  }
  return newObject;
}
 
 // Tests
 
 const testObject = { a: 1, b: 2, c: 3, d: 4 };
 
 const actual = swap(testObject);
 const expected = { 1: "a", 2: "b", 3: "c", 4: "d" };
 
 if (JSON.stringify(actual) === JSON.stringify(expected)) {
   console.log("Yay!");
 } else {
   console.log("Try again!");
 }