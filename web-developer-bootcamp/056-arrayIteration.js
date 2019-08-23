//To loop over an array using a for loop, we need to make use of the length property:

var colors = ["red", "blue", "green", "yellow"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//JavaScript provides an easier, built-in way to iterate through an array: forEach
// arr.forEach(someFunction);

colors.forEach(function(color) {
  //color is a placeholder, call it whatever you want
  console.log(color);
});

//for vs forEach
//The following two code snippets do the same thing:

//with a for loop:

var colors = ["red", "blue", "green", "yellow"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//using forEach:

var colors = ["red", "blue", "green", "yellow"];

colors.forEach(function(color) {
  console.log(color);
});

//with a while loop:

var count = 0;

while(count < colors.length) {
  console.log(colors[count]);
  count++;
}