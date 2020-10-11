var triangleSize = Number(prompt("How tall do you want your triangle to be?"));
while(isNaN(triangleSize)) {
  triangleSize = Number(prompt("Please input a number."))
}
var triangleBrick = "#";

for(var i = 0; i < triangleSize; i++) {
  console.log(triangleBrick);
  triangleBrick += "#";
}

/*

Solution in EJS:

for(var line = "#"; line.length < 8; line += "#")
  console.log(line);

*/