function arrayToList(array) {
  let list = {}; // resets 'list' at every iteration, fix this
  let indexCount = array.length;
  if (indexCount == 0) {
    return list;
  } else {
    let newObj = {};
    newObj.value = array[0];
    array.shift();
    return arrayToList(array); 
  }
}

let testArray = [1, 2, 3];
console.log(arrayToList(testArray));