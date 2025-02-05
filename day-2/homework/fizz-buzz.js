// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
I: The inputs should be a number from 1 to 100  
O: The output should print a number from 1 - 100 but for multiples of three print "Fizz" instead of a number and for multiples of five print "Buzz" instead of a number and for number that are multiples of both print "FizzBuzz"
C:
E:

*/

function fizzBuzz() {
  // YOUR CODE GOES BELOW HERE //
for(var i = 1; i <= 100; i++){
  if (i % 5 === 0 && i % 3 === 0){
    console.log("FizzBuzz");  
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

  // YOUR CODE GOES ABOVE HERE //
}
fizzBuzz();






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}