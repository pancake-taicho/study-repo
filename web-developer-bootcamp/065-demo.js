// Selecting and Manipulating

/* The document contains an object called style that has all CSS selectors to alter the style of an HTML element. We can SELECT these and MANIPULATE them with JavaScript: */

// SELECT:
const h1 = document.querySelector('h1');

// MANIPULATE:
h1.style.color = 'yellow';
h1.style.border = '5px solid pink';
/* It is important to note that we need to put the value into a string with quotes, unlike a CSS style sheet where we wouldn't need to. */

/* If we wanted the h1 to be yellow with a pink border when the page loaded we would just put these style rules into a CSS style sheet, no need to bother with JavaScript. We would use JavaScript to change the h1, however, to make the page more interactive. Maybe we would want the changes to happene when the user clicked on a specific part of the page, or if the user had been on the page for a certain amount of time. The style property is also good for quick testing. */

/* SEPARATION OF CONCERNS:

The idead that HTML, CSS, and JavaScript are each in charge of their own domains and that ideally there is little to no crossover of one domain into another. HTML = structure, CSS = presentation, JavaScript = behavior. Changing the aspects of the style of an element like we did above is usually not ideal... */

// An alternative:

/* Rather than directly manipulating style with JS, we can define a CSS class and then toggle it with on or off with JS. */

/* INSTEAD OF THIS:

var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red"; */

/* DEFINE A CLASS IN CSS:
.some-class {
  color: blue;
  border: 5px solid red;
} */

/* 
var tag = document.getElementById("highlight");
// ADD THE NEW CLASS TO THE SELECTED ELEMENT: 
tag.classList.add("some-class"); */

// classList
// A read-only list that contains the classes of a given element. It IS NOT AN ARRAY.

// classList.add()
// ADD A CLASS TO THE SELECTED ELEMENT

// classList.remove()
// REMOVE A CLASS

// classList.toggle()
// TOGGLE A CLASS

const p = document.querySelector('p');

p.classList.add('big');

p.classList.toggle('big');

// DOM Events

// .addEventListener(type, functionToCall())

/* This method listens for an event to happen, like a click on a button, and then causes some event to happen, like triggering a popup. It takes two arguments: the type of event to listen for (like "click") and a callback function (you can also use a named function) that will run some code when the event happens. */

h1.addEventListener('click', function() {
  alert('h1 was clicked');
  h1.style.background = 'orange';
});

// You can have more than one listener on a given element.

document.querySelector('ul').addEventListener('click', function() {
  console.log('YOU CLICKED THE UL!');
});

const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    this.classList.toggle('li-color');
  });
}

// In this situation, the 'this' keyword refers to lis[i] (THIS element being referenced before the .addEventListenter).
