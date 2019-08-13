// VERSION 1

// var arriveCheck = prompt("Are we there yet?");

// while(arriveCheck !== "yes" && arriveCheck !== "yeah") {
//   var arriveCheck = prompt("Are we there yet?");
// }

// alert("Yay! We finally made it!");

// VERSION 2

var arriveCheck = prompt("Are we there yet?");

// You can use indexOf() to make your input checking a little more flexible
while(arriveCheck.indexOf("yes") === -1) {
  var arriveCheck = prompt("Are we there yet?");
}

alert("Yay! We finally made it!");