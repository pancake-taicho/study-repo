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

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  let newList = { 'value': element, 'rest': list }
  return newList;
}

function nth(list, number) {
  let node = list;
  for (let i = 0; i <= number - 1; i++) {
    if (node) {
      node = node.rest;
    } else {
      return undefined;
    }
  }
  return node.value;
}

let testArray = [1, 2, 3];
console.log(arrayToList(testArray));

let testList = arrayToList(testArray);
console.log(listToArray(testList));

console.log(prepend(10, arrayToList(testArray)));

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 6));