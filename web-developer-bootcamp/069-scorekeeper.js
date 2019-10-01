const p1Button = document.getElementById('p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const p1Display = document.getElementById('p1Display');
const p2Display = document.querySelector('#p2Display');
const numInput = document.querySelector("input[type='number']");
const winningScoreDisplay = document.querySelector('p span');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = numInput.value;

p1Button.addEventListener('click', function() {
  if (!gameOver) {
    p1Score++;
    scoreCheck(p1Score, p1Display);
  }
  p1Display.textContent = p1Score;
});

p2Button.addEventListener('click', function() {
  if (!gameOver) {
    p2Score++;
    scoreCheck(p2Score, p2Display);
  }
  p2Display.textContent = p2Score;
});

resetButton.addEventListener('click', function() {
  reset();
});

numInput.addEventListener('change', function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
}

function scoreCheck(x, y) {
  if (x === winningScore) {
    const winner = y;
    y.classList.add('winner');
    gameOver = true;
    console.log('GAME OVER!');
  }
}
