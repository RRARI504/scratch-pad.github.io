// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * I: The input is a string
 * O: Return a number that is the length of the string
 * C
 * E
 */
function length(string) {
    // YOUR CODE BELOW HERE //
  return string.length //return the length of the string
    // YOUR CODE ABOVE HERE //
}
let name = "Ryan"; //declare the variable name and assign it to Ryan

console.log(length(name)); //call the function length with the name 





/**
 * Given an input String, return a new String forced to lowercase.
I: The input is a string 
O: Return the string to lowercase 
C:
E: 
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   return string.toLowerCase(); //return the string lowercased
  // YOUR CODE ABOVE HERE //
}
let string = "RYAN"; //declare a string and give it the value of a name
console.log(toLowerCase(name)); //call the function and pass in the name 


/**
 * Given an input String, return a new String forced to uppercase.
 I:This input is a string 
 O: he output should be a string that is forced to upper case
 C:
 E:
 */
 function toUpperCase(string) { //a function named w/ a string as a parameter
    // YOUR CODE BELOW HERE //
  return string.toUpperCase();
                              //return the string upper cased 

    // YOUR CODE ABOVE HERE //
}
let string2 = "ryan" ;    //declare a string with the value of a name 
console.log(toUpperCase(name));   //call the fucntion and log it to the console
/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 
I: The input should be a string
O: The output should be the string forced to "dash-case"
C:
E:

 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
  return string
  .toLowerCase()
  .replace(/\s/g, "-");

    // YOUR CODE ABOVE HERE //
}
let str = "Hello World"
console.log(toDashCase('Hello World'));

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 
 I: The input should be a string and a single charachter 
 O: The outputs should be string 
 C: The function should be case sensitive 
 E:
 
 */
 function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
  return string.toLowerCase().startsWith(char.toLowerCase());
    // YOUR CODE ABOVE HERE //
}
console.log(beginsWith('Max', 'm'));
console.log(beginsWith('Max', 'z'));


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 
 I: The input should be a string and a single charachter 
 O: The outputs should be string 
 C: The function should be case sensitive 
 E:
 */
 function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
  return string.toLowerCase().endsWith(char.toLowerCase());
    // YOUR CODE ABOVE HERE //
}
console.log(beginsWith('Max', 'm'));
console.log(beginsWith('Max', 'z'));

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 
I: The input is two strings 
O: Should out put one string put together 
C: Concatenate strings 
E:

 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  return stringOne + " " + stringTwo
    // YOUR CODE ABOVE HERE //
}
console.log(concat("Ryan", "Sim"));

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 
 I:  The input should be any number of strings 
 O: The output should all of the strings joined together
 C:
 E:
 
 */
 function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments); //converted arguments to an array 
    // YOUR CODE ABOVE HERE //
  return args.join(""); 
  //returns arguments joined together with no spaces in between
  
}
console.log(join("Ryan", "Sim"))

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 
I: The inputs are two strings 
O: The output should return the longest of the two strings, so a string 
C:
E:

 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  if(stringOne.length > stringTwo.lenght){
   return stringOne;
    
  } else{
    return stringTwo;
  }

    // YOUR CODE ABOVE HERE //
}
console.log(longest("ben", "maggie"));

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 
 I: The inputs are two strings 
 O: Return the number 1 if the first string is higher in alphabetical order. Return -1 if the second string is higher up and return 0 if the two string are equal in alphabetical order.
 C: Use a if else if statement
 E:
 */
 function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  if(stringOne < stringTwo){
    return 1;
  } else if (stringTwo < stringOne) {
    return -1;
  } else {
    return 0;
  }

    // YOUR CODE ABOVE HERE //
}
console.log(sortAscending("ryan", "alex"));

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if(stringOne > stringTwo){
    return 1;
  } else if (stringTwo > stringOne) {
    return -1;
  } else {
    return 0;
  }

    // YOUR CODE ABOVE HERE //
}
console.log(sortDescending("ryan", "alex"));


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}