// Come up with four different ways to select the first "p" element.

var p = 
document.querySelector("p");

var p2 =
document.getElementById("first");
// Remember, get... takes a STRING argument, NOT a CSS-style selector. No need for a # when selecting using this. Do use a # when using .querySelector() and .querySelectorAll(), though.

var p3 = 
document.getElementsByClassName("special")[0];

var p4 =
document.getElementsByTagName("p")[0];

var p5 =
document.querySelector("#first");

var p6 =
document.querySelector(".special");

var p7 = 
document.querySelectorAll("p")[0];

var p8 =
document.querySelector("h1 + p");

var p9 =
document.querySelector("p:first-of-type");