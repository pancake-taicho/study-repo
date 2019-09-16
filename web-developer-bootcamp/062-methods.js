// A method is just a function that is a property inside of an object

//ADDING METHODS TO AN OBJECT:

var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y){
    return x + y;
  }
};

// We add methods to our objects as opposed to writing them as standalone functions to logically organize and group our data. For example, having a method "speak()" that returns a different result for two different objects, like dog or cat. cat.speak() would return "MEOW" while dog.speak() would return "WOOF". The method is called speak() in both the dog and cat objects but they return different things.

//NAMESPACING:

function speak() {
  return "WOOF";
}

// speak() returns "WOOF".

function speak() {
  return "MEOW";
}

// speak() now returns "MEOW" but now we can't access or our older "WOOF" result. We have a Namespace Collision, i.e. two different fuctions have the same name. Let's put them into unique objects to be able to access them separately.

var dogSpace = {};
dogSpace.speak = function(){
  return "WOOF";
};

var catSpace = {};
catSpace.speak = function(){
  return "MEOW";
};

//THE KEYWORD this:

var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

function print(arr) {
  arr.forEach(function(el) {
    console.log(el);
  });
}

//print() is not a method. It currently functions outside of the comments object. To use print() with comments you need to pass in comments.data:

print(comments.data);

//Let's add print() to the comments object:

comments.print = function() {
  this.data.forEach(function(el) {
    console.log(el);
  });
}

//We pass use the code for the print() function but instead of passing in an outside array as an argument, we want to use comments.data, the array of data that we already have in the comments object, and we refer to the comments object using 'this'.