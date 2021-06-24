// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
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

function makeContact(id, nameFirst, nameLast) {
    //contact is an object literal with an id, first name, and last name that we have to eventually return
    const contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    return contact;
}

function makeContactList() {
    //create a contact array for contacts
    let contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            //add contact pushes a new contact to contacts list
            return contacts.push(contact);
        },
        findContact: function(fullName) {
            //find loops the contacts list
            for(let i = 0; i <= contacts.length; i++){
                //if the fullname matches contacts i first name and contacts i last name then return contact
                //otherwise return undefined
                return fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] ? contacts[i] : undefined;
            }
        },
        //remove contact searches through contacts via a loop
        removeContact: function(contact) {
            for(let i = 0; i <= contacts.length; i++){
                //if the current index matches the contact then delete it with splice
                if(contacts[i]===contact){//the one in splice is the delete count
                    contacts.splice(contacts[i], 1);
                }
            }
        },
        printAllContactNames: function(){
            //create empty array to store names
            let nameArr = [];
            //loop through the contacts array
            for(let i = 0; i < contacts.length; i++){
                //add the first name and last name to array
                nameArr.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
            }//join the elements to a string with a newline between each name and trim at the end
            return nameArr.join("\n").trim();
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
