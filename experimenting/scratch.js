// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();  
// }

// function showOk() {
//   alert('You agreed.');
// }

// function showCancel() {
//   alert('You canceled the execution.');
// }

// //usage: functions showOk, showCancel are passed as arguments to ask
// ask('Do you agree?', showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask('Do you agree?',
//   function() {alert('You agree.');},
//   function() {alert('You canceled the execution.')}
// );

// FUNCTION DECLARATION VS FUNCTION EXPRESSION

// FUNCTION DECLARATION:
// sayHi('John'); // <--this works because the JS engine builds all global functions before execution

// function sayHi(name) {
//   alert(`How do you do, ${name}?`);
// }

// FUNCTION EXPRESSION:
// sayHi('John');

// let sayHi = function(name) {
//   alert(`How do you do, ${name}?`);
// }; // <-- this won't work because function expressions are built when the execution reaches them, not before

// let age = prompt('What is your age?');

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert('Welcome, kiddo!');
//   };
// } else {
//     welcome = function() {
//       alert('All grown up!');
//     };
// }

// welcome();

// simplified:

// let age = prompt('What is your age?', '');

// let welcome = (age < 18) ?
//   function() { alert('Hello!');} :
//   function() { alert('Greetings!'); };

// welcome();

// ARROW FUNCTIONS:

// let age = prompt('What is your age?', 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert('Greetings!');

// welcome();

// // ARROW FUNCTION WITH MULTIPLE LINES (USES CURLY BRACES AND A RETURN):

// let add = (a, b) => { // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, we need an explicit 'return'
// };

// alert(add(1, 3));

// replace function expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask('Do you agree?',
//   function() { alert('You agree.');},
//   function() { alert('You canceled the execution.')}
// );

// now with arrow functions:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
};

ask('Do you agree?',
  () => alert('You agree.'),
  () => alert('You canceled the execution.')
);