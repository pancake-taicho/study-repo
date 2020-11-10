var triangleSize = Number(prompt("How tall do you want your triangle to be?"));
while (isNaN(triangleSize)) {
  triangleSize = Number(prompt("Please input a number."))
}
var triangleBrick = "#";

for (var i = 0; i < triangleSize; i++) {
  console.log(triangleBrick);
  triangleBrick += "#";
}

/* 

I was reminded of how strings can be added upon like numbers via concatenation with the + operator.
Also, in a for loop, the initializing statement can be both a string and called via console.log(); 
it doesn't have to always be a "var i = 0" counter.

SOLUTION IN EJS:

for(var line = "#"; line.length < 8; line += "#")
  console.log(line);

*/