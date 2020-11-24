function deepEqual(a, b) {
  if (typeof a == "object" && typeof b == "object") {
    for (let key in a) {
      if (a[key] == b[key]) {
        return deepEqual(a[key], b[key]);
      } else return false;
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