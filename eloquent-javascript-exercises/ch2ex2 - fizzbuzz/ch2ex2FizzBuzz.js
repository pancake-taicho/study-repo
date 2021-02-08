// MY SOLUTION:

var number = Number(prompt("Input your number."));

while(isNaN(number)){
  number = Number(prompt("Please input a number."));
}

for(var i = 1; i <= number; i++) {
  if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if(i % 5 == 0) {
    console.log("Buzz")
  }
  else {
    console.log(i);
  }
}

/*

I learned how to more efficiently build an output through the use of if statements that concatenate
onto an output string, which can then be printed in console.log(). 
Also, you can use logic operators (&& and ||) within console.log() - as well as any other function -
to choose between different outputs (output || n) or output values from multiple variables.

SOLUTION IN EJS:

for(var n = 1; n <= 100; n++) {
  var output = "";
  if(n % 3 == 0)
    output += "Fizz";
  if(n % 5 == 0)
    output += "Buzz";
  console.log(output||n);
}

*/