console.log('CONNECTED');

function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([6, 9, 2, 0]);

// *** isUniform() ***

// starting the loop at i = 1 is more efficient; we won't have to compare "first" (arr[0]) to itself when the loop starts at i = 1

function isUniform(arr) {
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

// *** isUniform() with a .forEach:

// We don't use a .forEach loop because when we return false it will only terminate the function being defined inside of the .forEach function, peeling back one layer. Then, the code move on to the next line in the code, which will return true. This will leave us with a false and then a true in the case of a non-uniform array. .forEach can cause this "layer" problem when trying to return a boolean value.

// function isUniform(arr) {
//   var first = arr[0];
//   arr.forEach(function(element) {
//     if(element !== first) {
//       return false;
//     }
//   });
//   return true;
// }

// *** sumArray() ***

function sumArray(arr) {
  let total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

// *** max() ***

// We can start the loop i counter at 1 since we don't need to compare max with it since max is already arr[0]

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
