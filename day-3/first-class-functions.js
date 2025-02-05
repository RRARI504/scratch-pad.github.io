// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 I: The input is a base which could be a string or a number 
 O: The output should be a boolean that shows if the test value is greater than the base. 
 C:
 E:
 
 */
 function createGreaterThanFilter(base) { //function that takes a base to be tested
  // YOUR CODE BELOW HERE //
return function(value){ 
  // If the base is a number and the value is also a number, compare numerically
  if (typeof base === "number" && typeof value === "number") {
    return value > base;
  }
  // If the base is a string and the value is also a string, compare 
  if (typeof base === "string" && typeof value === "string") {
    return value > base;
  }

  return base;//if base and value dont match return false
}

  
    
  }
 
let testNumber = createGreaterThanFilter(10) 
//a variable is made and the outer function is called with a value of 10 
console.log(testNumber(15)) 
//the test variable is called with the number 15 
    
    // YOUR CODE ABOVE HERE //

/** 

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 I: The input is a base to test against
 O: The output should be a boolean of true or false if the base is less than the test value
 C:
 E:
 */
 function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value){
      if (typeof base === "number" && typeof value === "number") {
        return value < base;
      }
      
      if (typeof base === "string" && typeof value === "string") {
        return value < base;
      }
    
      return value;//if base and value dont match return false
    }
    
    // YOUR CODE ABOVE HERE //
}
 let testNumberTwo = createLessThanFilter(15)
console.log(testNumberTwo(10))


/** 
/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 I: The input should be a function 
 O: The output should be a boolean value based off of the character starting with the actual startsWith value
 C: Should be case sensitive.
 E:
 
 */
 function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
  return function(test){
    return test.toLowerCase().startsWith(startsWith.toLowerCase());

  
  }
     
    // YOUR CODE ABOVE HERE //
}
let whatsStart = createStartsWithFilter("R")
console.log(whatsStart('Ryan'))
console.log(whatsStart('Raymond'))
console.log(whatsStart('Ashlee'))

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 I: The input should be a function 
 O: The output should be a boolean value based of the character ending with the actual endsWith value
 C: Should be case sensitive 
 E:
 */
 function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  return function(test){
    return test.toLowerCase().endsWith(endsWith.toLowerCase());
  
  }
     
    // YOUR CODE ABOVE HERE //
}
let whatsEnd = createEndsWithFilter('n')
console.log(whatsStart('Ryan'))
console.log(whatsStart('Raymon'))
console.log(whatsStart('Ashlee'))



/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 I: The input should be an array of strings
 O: The output should an  array of strings based off of the modified function 
 C:
 E:
 */
 function modifyStrings(strings, modify) { 
    //function that takes a parameter string and a function called. modify
      // YOUR CODE BELOW HERE //
    var modifiedStrings = []; 
    //created a container array for modified values to go to 
    
    for(var i = 0; i < strings.length; i++) {
      //loops over each string within the array
      modifiedStrings.push(modify(strings[i]))
    // appllies the modify fucntion to the current string parameter and pushes the values to the modifiedStrings array
      // YOUR CODE ABOVE HERE //
    }
  
      return modifiedStrings; //return the modified strings in an array
  
  }
  
  function toLowerCase(str){ //function to change string values to lowercase
    return str.toLowerCase(); 
  }
  
  var stringArr = ['RYAN', "SIMIEN", "IVORY"] //array with actual string values
  
  let lowerCased = modifyStrings(stringArr, toLowerCase)
  // modifying the outter array to lower case all strings in the container array
  console.log(lowerCased);




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 I: The inputs here is a funciton and an array of strings. 
 O: The output is a boolean value that says if all strings within the array pass the test
 C: 
 E:
 
 */
 function allStringsPass(strings, test) {
    //function that takes a function and an array of strings
      // YOUR CODE BELOW HERE // 
    return strings.every(test)
    //.every method iterates over array and checks if they all are true   
      // YOUR CODE ABOVE HERE //
  }
  
  function endsWithN(letter){ //test function that sees if array values end with n
      return letter.endsWith("n");
    
    }
  var arrayNames = ['Ryan', 'Sarah', 'Jocelyn']; 
  //variable made with actual string values
  let answer = allStringsPass(arrayNames, endsWithN);
  //variable that checks if all names in made array end with the letter n
  console.log(answer);
  




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}