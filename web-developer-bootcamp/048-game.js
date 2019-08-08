//Create secretNumber
var secretNumber = 4;

//Ask user for a guess
//Since prompt returns a string, we'll want to convert that string into a number. To change the guess string into a number, we can wrap the prompt with the Number() constructor:

//var guess = Number(prompt("Guess a number!"));

//A more explicit version of the above:
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

//Check if guess is right

if (guess === secretNumber) {
  alert("That's right!");
}
//Otherwise, check if guess is lower:
else if (guess < secretNumber) {
  alert("Too low. Guess again!");
}
//Otherwise, check if guess is higher:
else {
  alert("Too high. Guess again!");
}

//You can use typeof to see what kind of data type a variable is (i.e. typeof guess).

// while (guess !== secretNumber) {
//   alert("Sorry! Guess again.");
//   guess = prompt("Guess a number!");
//   if (guess === secretNumber) {
//     alert("That's right!");
//   }
// }