var size = Number(prompt("Enter a number for the size of your board."));
while (isNaN(size)) {
  size = Number(prompt("Please enter a number."));
}

var output = "";

for(var i = 0; i < size; i++) {
  for(var j = 0; j < size; j++) {
    if((i + j) % 2 != 0) {
    	output += "#";
    } else { 
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);

/*

Solution in  EJS:

var size = 8;

var board = "";

for (var y = 0; y < size; y++ ) {
  for (var x = 0; x < size; x++) {
    if((x + y) % 2 == 0)
    board += " ";
    else
    board += "#";
  }
  board += "\n";
}

console.log(board);

*/