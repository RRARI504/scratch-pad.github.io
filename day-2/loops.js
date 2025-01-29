// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 I: The input should be an array 
 O: The outout should be the array values printed to the console
 C:
 E:
 */
 function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}
var arr = [1,2,3,4,5];
console.log(printArrayValues(arr));

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 I: The input is an array
 O: The output is the array values printed backwards
 C:
 E:
 
 */
 function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(printArrayValues(arr));

/** 
 * Given an input Object, return an Array containing the Object keys.
 I: The input is an object 
 O: The output should be an array contaning only the objects keys. Which should be strings 
 C:
 E: 
 */
 function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object);
  // YOUR CODE ABOVE HERE //
}
  
let objPersonality = {
  name: "Ryan",
  Age: 24,
  Race: "Black",
  Talent: "Coding"
};

var objKeys = getObjectKeys(objPersonality);
console.log(objKeys);

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/**
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
I: The input is an object
O: The output is the keys from the object
C: Use a loop 
E:
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){
      console.log(key)
  }
}

var objKeys = {
  name: "Simien",
  Age: 42,
  Race: "White",
  Talent: "Photos"
   
  // YOUR CODE ABOVE HERE //
}

var objKeys = printObjectKeys(objKeys);
console.log(objKeys);


/** 
 * Given an input Object, return an Array containing the Object's values.
I: The input is an object 
O: The output should be an array containing the actual values of the object which would be strings and numbers.
C:
E:
 */

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object);
  // YOUR CODE ABOVE HERE //
}
  
let objPersValues = {
  name: "Ryan",
  Age: 24,
  Race: "Black",
  Talent: "Coding"
};

var objValues = getObjectValues(objPersonality);
console.log(objValues);


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 I: The input is an object 
 O: The output should be the array values which should be numbers or strings
 C: Use console.log
 E:
 
 */

 function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object)
    console.log(object[key])
  // YOUR CODE ABOVE HERE //
}
  
var objectTwo = {
  name: "Ryan",
  Age: 24,
  Race: "Black",
  Talent: "Coding"
};

console.log(getObjectValues(objectTwo));

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 I: The input should be an object 
 O: Should return a number that represents the amount of key value pairs in the object. 
 C:
E:
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object).length;
  // YOUR CODE ABOVE HERE //
}

var objLength = {
  name: "Ryan",
  Age: 24,
  Race: "Black",
  Talent: "Coding"
}

var objLength = getObjectLength(objLength)
console.log(objLength);


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var keys = Object.keys(object); //variable keys that is equal to the objects keys in the object parameter and gets an array to iterate over
  
    keys.reverse(); 
  //takes the array of keys object keys and uses .reverse to reverse every key 
  
    for(var key of keys){ 
      //for of loop that loops over the object keys specifically and prints the object keys 
    console.log(object[key]) // prints value of each key reversed 
    }
  
  }
  var objectThree = {
  name: "Ryan",
  Age: 24,
  Race: "Black",
  Talent: "Coding"
};

console.log(printObjectValuesInReverse(objectThree));
  




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}