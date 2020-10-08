const dogs = [
  { name: "moe", age: 4 },
  { name: "larry", age: 5 },
  { name: "curly", age: 6 }
];

pluck(dogs, "age");

function pluck(arr, key) {
  var keyValues = [];

  for(var i = 0; i < arr.length; i++) {
    keyValues[i] = arr[i][key];
  }
  //why does "return keyValues" not work?
  console.log(keyValues);
}