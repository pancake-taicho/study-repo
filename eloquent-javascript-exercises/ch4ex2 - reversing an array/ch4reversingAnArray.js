// MY SOLUTION:

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// I don't know if this is the 'desired' solution, since I used
// a placeholder array to store the values and then push them
// back onto the original as I shift the original values.
// Does this count as 'reversing an array in place'?
// --> It does NOT count, according to the hints.

// DOESN'T COUNT AS AN ANSWER:
// function reverseArrayInPlace(array) {
//   let storedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     storedArray[i] = array[i];
//   }
//   for (let j = storedArray.length - 1; j >= 0; j--) {
//     array.push(storedArray[j]);
//     array.shift();
//   }
//   return array;
// }

// My reverseArrayInPlace solution, after reading the hints:

function reverseArrayInPlace(array) {
  let swapValue = 0;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    swapValue = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = swapValue;
  }
  return array;
}

let testArray = [1, 2, 3, 4, 5];
console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));

/*

SOLUTION IN EJS:

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

*/