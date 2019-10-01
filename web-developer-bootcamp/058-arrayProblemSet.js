// printReverse()

const list = [1, 2, 3, 4, 5, 6];

function printReverse() {
  const arrayLength = list.length;
  for (let i = arrayLength; i >= 0; i--) {
    console.log(list[i]);
  }
}

// COURSE SOLUTION:

// When writing the function you can directly pass in an array instead of creating predetermined arrays

// for arr.length, use the arr variable in the function definition instead of taking an extra step to create an arrayLength variable

//  function printReverse(arr) {
//    for(var i = arr.length -1; i >= 0; i--) {
//    console.log(arr[i]);
//    }
//  }

// isUniform()

const listOne = [1, 1, 1, 1, 3, 1, 1];
const listTwo = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
const listThree = ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'a'];
const listFour = [1, 1, 1, 'a', 1];

function isUniform(x) {
  const index = x[0];
  for (let i = 0; i < x.length; i++) {
    const check = x[i];
    if (check !== index) {
      return false;
    }
  }
  return true;
}

// COURSE SOLUTION:

// starting the loop at i = 1 is more efficient; we won't have to compare "first" (arr[0]) to itself when the loop starts at i = 1

// We don't use a .forEach loop because when we return false it will only terminate the function being defined inside of the .forEach function, peeling back one layer. Then, the code move on to the next line in the code, which will return true. This will leave us with a false and then a true in the case of a non-uniform array. .forEach can cause this "layer" problem when trying to return a boolean value.

// function isUniform(arr) {
//   var first = arr[0];
//   for(var i = 1; i < arr.length; i++) {
//     if(arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }

// *** isUniform() with a .forEach:

// function isUniform(arr) {
//   var first = arr[0];
//   arr.forEach(function(element) {
//     if(element !== first) {
//       return false;
//     }
//   });
//   return true;
// }

// sumArray()

const numsOne = [1, 56, 347, 34, -6]; // 432
const numsTwo = [-5, -35, -85, 100, 200]; // 175
const numsThree = [1, 1, 1, 1, 1, 1, 1]; // 7

function sumArray(x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += x[i];
  }
  console.log(total);
}

// COURSE SOLUTION:

// function sumArray(arr) {
//   var total = 0;
//   arr.forEach(function(element) {
//     total += element;
//   });
//   return total;
// }

// max()

const numsFour = [1, 3456, 968, 0, -44]; // 3456
const numsFive = [45, 2345, 87, -3456]; // 2345
const numsSix = [54, 55, 59, 57, 58, 59]; // 59
const numsSeven = [-1, -2, -3, -4, -5]; // -1

function max(x) {
  let max = x[0];
  for (let i = 0; i < x.length; i++) {
    if (max < x[i]) {
      max = x[i];
    }
  }
  console.log(max);
}

// COURSE SOLUTION:

// *** max() ***

// We can start the loop i counter at 1 since we don't need to compare max with it since max is already arr[0]

// function max(arr) {
//   var max = arr[0];
//   for(var i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
