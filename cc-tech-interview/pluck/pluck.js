/*
Declare a function 'pluck'.

'pluck' takes two inputs: an array of objects and a string (the key)

'pluck' returns an array of the corresponding values at that key from each object.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

/*

const dogs = [
  { name: "moe", age: 4 },
  { name: "larry", age: 5 },
  { name: "curly", age: 6 }
]; 

pluck(dogs, "name");

*/

function pluck(arr, key) {
  var keyValues = [];
  for(var i = 0; i < arr.length; i++) {
    keyValues[i] = arr[i][key];
  }
  /* 
  
  why does "return keyValues" not work? 
  => Because you have to console.log the value being returned.

  */
  return keyValues;
}

//Tests

const dogs = [
  { name: "moe", age: 4 },
  { name: "larry", age: 5 },
  { name: "curly", age: 6 }
];

let actual = pluck(dogs, "name");
let expected = ["moe", "larry", "curly"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = pluck(dogs, "age");
expected = [4, 5, 6];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}