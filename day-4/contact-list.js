// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { //factory function that creates contacts w/ three parameters
    return { //returns a contact object with given key value pairs 
      id: id,
      nameFirst: nameFirst,
      nameLast: nameLast 
    };
} 



function makeContactList() { //a factory function for the actual contact list
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //contacts variable that holds the actually contact values to be made
    
    return { //returns an object that manages the contacts list with the following methods
        // we implemented the length api for you //
              length: function(){ 
                //a length method that is another function that manages the contacts in the array 
                return contacts.length;
                //returns the contacts array length 
              },       
      
              addContact: function(contact){ 
                //addContact method that is a fucntion that takes a contact object to be added to the contact list 
                return contacts.push(contact)
                //returns the contact and pushes it to the array container
               },
      
              findContact: function(fullName){
                //findContact method that takes a full name string 
                 var [firstName, lastName] = fullName.split(' ');
                //variable that takes the full name and spilts it to first and last names
                return contacts.find(contact => contact.nameFirst === firstName && contact.nameLast === lastName);
                // return statement uses find method on contacts array and serches for contact object values in the array that matches first and last names
                     
                },
              
                removeContact: function(contact){
                  //removeContact method that is a function that takes contact array
                  contact.delete(contact.id);
                  //uses .delete to remove a key value pair associated with the given key from the contact array object 
                },
                 
                printAllContactNames: function(){
                  
                  var lineBreak = contacts.map(contact =>  
                    //variable linebreak that maps over all contacts to make an array full of names
                    `${contact.nameFirst} ${contact.nameLast}`);
                  return lineBreak.join('\n');
                  //joins the name array using .join with a new line character and doesnt trail the new line at the end
                }
                
              
    };
}
var contactNumOne = makeContact(1, "Ryan", "Simien");
//var contactNumTwo = makeContact(2, "Edie", "Weath");

var myContacts = makeContactList();

myContacts.addContact(contactNumOne);
//myContacts.addContact(contactNumTwo);

console.log(myContacts.printAllContactNames()); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}