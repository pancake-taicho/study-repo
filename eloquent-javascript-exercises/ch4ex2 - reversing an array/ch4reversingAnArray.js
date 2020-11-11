function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let j = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[j - i];
    console.log(j);
  }
  return array;
}

let testArray = [1, 2, 3, 4, 5];
console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));