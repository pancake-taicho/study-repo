function minimum(a, b) {
  return a < b ? a : b; 
} 

console.log(minimum(11, 12));

function minimum(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(minimum(10, 16));

/*

SOLUTION IN EJS:

function min(a, b) {
  if (a < b) return a;
  else return b;
}

*/