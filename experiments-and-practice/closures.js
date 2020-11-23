// "Closures are nothing but FUNCTIONS WITH PRESERVED DATA."

for(var i = 0; i < 3; i++) {
  setTimeout( () => {
    console.log(i);
  }, 1000);
}

console.log('after the loop');

/*

DEMONSTRATION OF HOW CLOSURE VALUES ARE CHANGED IN BLOCK SCOPE VS FUNCTION SCOPE:

let i:

loop 1: i=0  f(c:i(0));
loop 2: i=1  f(c:i(1)); 
loop 2: i=2  f(c:i(2)); <= each of these i's are distinct from each other; the first i (i=0) is garbage-collected after the first loop block because let variables only have block scope; when the block is finished, it is garbage-collected away, but in this case, it's value is still held in closure; the for loop has to create a NEW i in the next loop. by the end of the loop there are 3 distinct variables called 'i', and when you console.log(i), you get 3 distinct values (0, 1, 2).

var i:

loop 1: i=0  f(c:i(3)); <= held in closure; updated with new i value after each loop
loop 2:      f(c:i(3)); <= held in closure; updates i, is updated by later loop iterations
loop 3:      f(c:i(3)); <= held in closure; updates i, is updated by later loop iterations
loop 4: i=3 <= loop ends here because the loop must first check to see if the 'check' condition is met (i < 3) and THEN it stops if that condition evaluates true, but it still updates the other three i values held in closure to 3; the i values held in closure update with each iteration because they are the the SAME i, NOT distinct ones like in the 'let i' example. this is because 'var' variables have 'function scope', they are accessible inside the function they are being used in and are still available even after the function ends; they aren't garbage-collected after each iteration. but 'let' variables have 'block scope', they are only useable inside the block ( {...} ) they are used in and then they are garbage-collected, gone; each time the loop updates with the let i variable, the old one is garbage-collected and a new one has to be created. with the var i variable, i ISN'T garbage-collected after each loop; it STAYS and is UDPATED with each loop iteration.

if you want to keep the variable as a 'var' instead of let, you can do this:

for(var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout( () => {
    console.log(i);
    }, 1000);
  })(i);
}

you can use an immediately-invoked function expression to create a block scope to wrap the code in, giving the same output as if i had been a 'let' variable 

*/