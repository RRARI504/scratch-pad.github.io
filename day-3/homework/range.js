// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 I:  I want to input two numbers as integers 
 O: I want to output an array of numbers that contains all the numbers that are in between the the two integers. If the first integer is greater than the second integer than return the numbers in reverse. 
 C: 
 E: 
 */
 function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var collection = []; //data collection for numbers
      if(start >= end){ 
        //determines if the first integer is greater than the second
        
        for(let i = start; i >= end; i-- ){ //for loop that iterates backwards and pushes value to collection i
          collection.push(i)
         }
        } else {
          
            
          for(let i = start; i <= end; i++ ){
          collection.push(i)
        }
      }
    
    return collection;
    
    // YOUR CODE GOES ABOVE HERE //
}
console.log(range(14, 8));
console.log(range(8, 14));





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}