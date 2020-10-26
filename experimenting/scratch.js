function seven() {let x = 7; return x;}

function times(x) {return function(y) {return x * y;}}

console.log(seven(times(seven())));