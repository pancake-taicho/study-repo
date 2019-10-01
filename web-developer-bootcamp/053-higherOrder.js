function sing() {
  console.log('Twinkle, twinkle...');
  console.log('How I wonder...');
}

// Now we use setInterval to call the sing() function every 1000 milliseconds (1 sec):

setInterval(sing, 1000);

// We can also declare an anonymous function inline inside the setInterval function. This
// function only works inside the setInterval function it's declared in and cannot be
// referred to outside of it:

setInterval(function() {
  console.log('I am an anonymous function!');
  console.log('THIS IS AWESOME!');
}, 2000);

// You can stop the code with the clearInterval() function. setInterval returns a number,
// and that's the number you pass in to clearInterval() to stop setInterval().

// For example: clearInterval(2);
