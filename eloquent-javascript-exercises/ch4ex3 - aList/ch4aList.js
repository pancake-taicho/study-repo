function arrayToList(array) {
  let list = {};
  for(let i = array.length - 1; i >= 0; i--) {
    if (i == array.length - 1) {
    list = { value: array[i], rest: null };
    } else {
    list = { value: array[i], rest: list };
    }
  }
  return list;
}

let testArray = [1, 2, 3];
console.log(arrayToList(testArray));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

// let testList = arrayToList(testArray);
let testList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
console.log(listToArray(testList));