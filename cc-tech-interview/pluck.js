const dogs = [
  { name: "moe", age: 4 },
  { name: "larry", age: 5 },
  { name: "curly", age: 6 }
];

pluck(dogs, "age");

function pluck(arr, key) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i][key]);
  }
}