// ATTRIBUTES:
// Use getAttribute() and setAttribute() to read and write attributes like src or href

const link = document.querySelector('a');
link.getAttribute('href'); // "www.google.com"
// CHANGE HREF ATTRIBTUE:
link.setAttribute('href', 'www.dogs.com');
// <a href="www.dogs.com">I am a link.</a>

// TO CHANGE THE IMAGE SRC:
const img = document.querySelector('img');
img.setAttribute('src', 'corgi.png');
// <img src="corgi.png">
