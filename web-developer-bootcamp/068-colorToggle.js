//MY SOLUTION:

/*

var body =
document.querySelector("body");

body.classList.remove("background");

var button =
document.querySelector("button");

button.addEventListener("click", function() {
  body.classList.toggle("background");
});

*/

//VIDEO SOLUTION:

// var isPurple = false;

var button =
document.querySelector("button");

// button.addEventListener("click", function() {
//   //if white
//     //make it purple
//   //else
//     //make it white
//   if(isPurple) {
//     document.body.style.background = "white";
//     // isPurple = false;
//   } else {
//     document.body.style.background = "purple";
//     // isPurple = true;
//   }
//   isPurple = !isPurple; //This refactor just negates whatever the value  of isPurple is; we don't have to explicitly switch it in each action of the if-else statement.  
// });

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
})