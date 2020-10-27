// alert("I'm JavaScript!");

// ----

// let name = "John";
// let admin = name;

// alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "Mike";

// ----

// let name = "Ilya";
// alert(`Hello, ${name}!`); 
// alert(`Hello, ${"name"}!`);
// alert(`Hello, ${1}!`);

// ----

// let userName = prompt("What is your name, user?");
// let nameIsCorrect = confirm(`Your name is ${userName}, right?`);
// alert(`Your name is ${userName}!`);

// ----

// let jsName = prompt("What is the official name of JavaScript?", "");
// if (jsName == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? It's ECMAScript.");
// }

// ----

// let num = prompt("Type in a number"); <-- need to reprompt if anything but a number is input
// if(num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//----

// let result = (a + b < 4) ? 'Below' : 'Over';

// ----

let login = prompt("Enter login");

let message = (login == 'Employee') ? 'Hello':
  (login == 'Director') ? 'Greetings':
  (login == '') ? 'No login':
  '';

alert(message);