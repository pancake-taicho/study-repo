// MY FIRST FAILED ATTEMPT:

// function deepEqual(a, b) {
//   if (typeof a == "object" && typeof b == "object" && a != null && b != null) {
//     for (let key in a) {
//       if (a[key] === b[key]) { <-- fails here on the third test
//         return deepEqual(a[key], b[key]);
//       } else return false;
//     }
//   } else if (a === b) {
//     return true;
//   } else return false;
// }

// MY SOLUTION AFTER HINTS:

function deepEqual(a, b) {
  let aPropCount = 0;
  let bPropCount = 0;
  if (typeof a == "object" && typeof b == "object" && a != null && b != null) {
    for (let prop in a) {
      aPropCount++;
    }
    for (let prop in b) {
      bPropCount++;
    }
    if (aPropCount != bPropCount) {
        return false;
    } else {
      for (let prop in a) {
        if (b[prop]) return deepEqual(a[prop], b[prop]);
      }
    }
  } else if (a === b) {
    return true;
  } else return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

/* 

SOLUTION IN EJS:

function deepEqual(a, b) {
  //first compare a and b right out of the gate
  if (a === b) return true;

  // check to see that neither a nor b are 'null' or 'object'
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  
  // assuming BOTH a and b are 'objects'
  // use Object.keys method to return an array 
  // of a and b's keys; 
  // we'll use these arrays to compare the lengths of 
  // a and b to see if they have the same number of keys
  let keysA = Object.keys(a), keysB = Object.keys(b);

  // compare lengths of a and b
  if (keysA.length != keysB.length) return false;

  // see if b includes each key in a, and compare them
  // if b does not include the key from a, or b does include
  // the key from a but their values aren't equal, 
  // return false
  for (let key in a) {
    if (!keysB.includes(key) || !deepEqual(a[key, b[key]])) return false;
  }

  return true;
}

*/