// textContent

// Returns a string of all of the text within a given element (the text between the HTML tags)

// Select the p tag:
const tag = document.getElementsByTagName('p')[0];

// Retrieve the text content:
tag.textContent; // "This is an awesome paragraph!"

// Alter the text content:
tag.textContent = 'blah blah blah blah';
// This will erase any HTML tags that were emebedded in the original text, however.

// You can chain properties in a single line (without saving the selected element as a variable):
// document.getElementsByTagName("p")[0].textContent = "END OF LESSON!";

// innerHTML

// Similar to textContent, except that it returns ALL of the HTML contained in a given element, including tags.
tag.innerHTML; // "This an <strong>awesome</strong> paragraph!"

// We usually don't use innerHTML to change text since it will just overwrite the HTML tags that were originally there, just like with textContent.
