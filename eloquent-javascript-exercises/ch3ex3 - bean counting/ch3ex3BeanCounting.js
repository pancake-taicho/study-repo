// MY SOLUTION:

function countChar(string, char) {
  var charCounter = 0;
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char) {
      charCounter++;
    }
  }
  return charCounter;
}

console.log(countChar("kakkerlak", "k"));
// -> 4
console.log(countChar("bubblegumballoon", "b"));
// -> 4


/*

First version of "countChar", titled "countBs":

function countBs(string) {
  var bCount = 0;
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B")
      bCount++;
  }
  return bCount;
}

console.log(countBs("Babbadook"));
// -> 1
console.log(countBs("BaBBadook"));
// -> 3
console.log(countBs("BABAYAGA"));
// -> 2

SOLUTION IN EJS:

function countChar(string, ch) {
  let counted = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] == ch)
      counted += 1;
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// -> 2
console.log(countChar("kakkerlak", "k"));
// -> 4

*/