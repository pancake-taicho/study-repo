// 5 Common methods inside the document obect.

// 1) document.getElementbyId();

var tag = 
document.getElementById("highlight");
/* This takes a string argument and returns the one element with the matching ID. Remember that any given id can only occur ONE TIME on a given page. */

/* tag will equal <li id="highlight">List Item 1</li>. It's shown as if it's HTML, but it is actually a JavaScript OBJECT constructed from the HTML. You can confirm this with console.dir(tag); */

// 2) document.getElementsByClassName();

var tags = 
document.getElementsByClassName("bolded");
/* This takes a string argument and returns a list of ALL elements with the mathcing class. Remember that multiple elements can have the same class, hence the plural on Elements. */

/* The returned list of objects looks like it's an array but it isn't. It's a Node List, which is array-like, a lightweight array. You can select for different indices in the list like you would an array(document.getElementsByClassName("bolded")[0];). You can also check the length of the assigned variable (tags.length();). You couldn't, however, do tags.forEach() since .forEach() processes each item in an array, NOT a Node List. */

// 3) document.getElementsByTagName();

var tags = 
document.getElementsByTagName("li");
/* This works the same as .getElementsByClassName() except that it returns a list of all elements that match the given tag, like li or h1. You can select ANY tag on the page, even the body and head tags, and even if there is only one element that matches the tag; there don't have to be multiple elements that match the tag. */

// 4) document.querySelector();

var tag =
document.querySelector("#highlight");
/* This returns the first element that matches a given CSS-style selector. You have to use CSS syntax when selecting. Again, this only return ONE element, the very first element that matches the selector. You can also get specific when selecting, for example, searching for the first anchor tag in an li with a certain class (document.querySelect("li a.special"); */

// 5) document.querySelectorAll();

var tags =
document.querySelectorAll("h1");
/* Works exactly the same as .querySelector() except this returns a LIST OF ELEMENTS (a Node List) of ALL of elements that match the selector. This method will still work even if there's only one match; there don't have to be multiple matches for the selector. */