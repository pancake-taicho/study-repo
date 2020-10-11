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

I learned about using a for loop within a for loop to track two dimensions of output, 
output along an x-axis and output along a y-axis. By using % to determine whether the sum of the
x and y counters are even or odd, you can determine whether a line of the board is an even or odd 
one and thus whether an input should be a space or a #. 

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