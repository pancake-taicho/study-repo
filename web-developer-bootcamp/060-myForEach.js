var nums = [46, 65, 77, 34];

nums.forEach(function(num) {
  console.log(num);
});

//You can pass in an array as an argument to a function as an alternate way to iterate through an array without using the "JavaScript magic" of grabbing the nums variable out of thin air and using it with .forEach:

// myForEach(nums, function(num) {
//   console.log(num);
// });

//What .forEach does is iterate through each item in an array. To do that, you need to use a loop.
function myForEach(arr, func) {
  //loop through array
  for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

var colors = ["red", "orange", "blue"];

myForEach(colors, alert);
//And that's pretty much all there is to defining a .forEach function. But you usually won't see a named function being passed. Usually it will be an anonymous function.

//myForEach with an anonymous function:

myForEach(colors, function(color) {
  console.log(color);
});

//How to call .forEach as a method to an array:

Array.prototype.myForEach = function(func) {
  //"this" refers to the particular array that we're calling upon, in this case
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  } 
}

var friends = ["Lacy", "Vicky", "Carlos", "Jasmine", "Lauren"];

friends.myForEach(function(name) {
  console.log(name + " is cool!");
});

//THE BIG IDEA HERE is the idea of passing a function around. We can pass a function as an argument and it won't be executed until we refer to it inside the code and ADD THE PARENTHESES onto the end