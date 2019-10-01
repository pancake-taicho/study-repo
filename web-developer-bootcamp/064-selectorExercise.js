// Come up with four different ways to select the first "p" element.

const p = document.querySelector('p');

const p2 = document.getElementById('first');
// Remember, get... takes a STRING argument, NOT a CSS-style selector. No need for a # when selecting using this. Do use a # when using .querySelector() and .querySelectorAll(), though.

const p3 = document.getElementsByClassName('special')[0];

const p4 = document.getElementsByTagName('p')[0];

const p5 = document.querySelector('#first');

const p6 = document.querySelector('.special');

const p7 = document.querySelectorAll('p')[0];

const p8 = document.querySelector('h1 + p');

const p9 = document.querySelector('p:first-of-type');
