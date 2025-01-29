// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 I: The input is a function with a value of an array or some other simple data type 
 O: The output is a boolean value based off of the data type. If the value is an array the boolean wil be true and false if not
 C:
 E:
 
 */

 function isArray(value) {
    // YOUR CODE BELOW HERE //
  return Array.isArray(value)    
    // YOUR CODE ABOVE HERE //
}
console.log(isArray([1,2,3]));
console.log(isArray("Ryan"));





/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 
 I: The input should be a value that can be one of the simple data types
 O: The output should be a boolean based off if the value is an object or not. It should print true if the value is a object and false otherwise. 
 C:
 E:
 
 */
 function isObject(value) { 
    //function isObject that takes a parameter value that checks if a value is an object
      // YOUR CODE BELOW HERE //
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
      //return statement sees if value is an object. && checks if value isnt null and not an array and if value is not an isnatnce of Date
    }
      // YOUR CODE ABOVE HERE //
   console.log(isObject([1, 2, 3]));
  



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 I: The input is a value of one of the simple data types 
 O: The outputs is a boolean statment based off of the value being an array or an object and false if otherwise.
 C:
 E: 
 */
 function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){ //checks if the value is an array and returns true
      return "true";
    }
 
   if( typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)){
     return "true";
    //checks if value is an object. && checks if value isnt null and not an array and if value is not an isnatnce of Date
    // YOUR CODE ABOVE HERE //
  }
  return 'false';
  //if not an array or an object return false

}

console.log(isCollection("hey")); //calls the function and give it an array for the value

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 I: The input will be a value that is one of the types
 O: The output will be the type of the value as a string
 C:
 E:
 */ 
 function typeOf(value) {
    // YOUR CODE BELOW HERE // 
  if(value === null){
    //if statement that explicitly checks for null because typeOf null will return object
    return 'null';
  }
  
  if(Array.isArray(value)){
    //if statement that identifies arrays because typeOf array will return an object
    return "array";
  }
  
  if(value instanceof Date){
    //if statement using instanceof to check for date objects becuase typeOf date will return an object
    return "date";
  }
  

    return typeof value;
  //return statement that checks for every other type 
    
    
    // YOUR CODE ABOVE HERE //
}

console.log(typeOf(123));
console.log(typeOf("Ryan"))
console.log(typeOf(null))
console.log(typeOf([1,2,3]))
console.log(typeOf(undefined))



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}