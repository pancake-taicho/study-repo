// MY SOLUTION, CLUNKY AND VERBOSE:

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

function recursiveNth(list, number) {
  let node = list;
  if (number == 0) {
    return node.value;
  } else if (node) {
    node = node.rest;
    return recursiveNth(node, number - 1);
  } else {
    return undefined;
  }
}

let testArray = [1, 2, 3];
console.log(arrayToList(testArray));

let testList = arrayToList(testArray);
console.log(listToArray(testList));

console.log(prepend(10, arrayToList(testArray)));

console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
console.log(recursiveNth(arrayToList([10, 20, 30]), 6));

/* 

SOLUTION IN EJS:

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
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

function prepend(value, list) {
  return {value, rest: list} 
  // Isn't the 'value' parameter just that, a value (number)? 
  // Don't we also need to define the key 'value' to go along
  // with the 'value' parameter when we return the prepended list?
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

*/