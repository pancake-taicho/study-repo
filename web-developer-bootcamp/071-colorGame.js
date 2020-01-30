<<<<<<< HEAD
/* eslint-disable vars-on-top */
var colors = generateRandomColors(6);
=======
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
>>>>>>> 6161c4d9a60fff173317770741f87f5f422fc5fb

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

/* Some developers have strict rules about how long a function can be before it should be split up into smaller functions. One rule is that if a function is 10 LoC or longer - give or take - it should be broken down into smaller functions. */

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // writing the below if/else using the ternary operator
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }
}

function setupSquares(){
  for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    // use style.backgroundColor. It's compatible with more browsers.
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of picked square
      const clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  // change the colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // reset h1 background to steelblue
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each square color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  const arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  const r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  const g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}