// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    //create a function within the function that tests a value against our input base
    return function test(value){
        //if the value is greater it will return true, else it will return false
        return value > base ? true : false;
    };
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
        //create a function within the function that tests a value against our input base
    return function test(value){
        //if the value is lesser it will return true, else it will return false
        return value < base ? true : false;
    };
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    //return a function that tests a string for the startswitch character, it will return true or false
    return function test(str){//both the string and character had to be sent to lowercase
        return str.toLowerCase().charAt(0) === startsWith.toLowerCase() ? true : false;
    };
    
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    //return a function that tests a string for the endsWith character at the end of the sentence, it will return true or false
    return function test(str){//both the string and character had to be sent to lowercase
        return str.toLowerCase().charAt(str.length-1) === endsWith.toLowerCase() ? true : false;
    };
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    //declare a new array that will be returned
    let result = [];
    //loop through the strings array
    for(let i = 0; i < strings.length; i++){
        //call the modify function on each element and push the result to result array
        result.push(modify(strings[i]));
    }//return the result array
    return result;
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    //this creates a tally of tests
    let testPass = 0;
    //loop through the array of strings 
    for(let i = 0; i < strings.length; i++){
        //if the test passes the tally increments
        if(test(strings[i])===true){
            testPass++;
        }
    }//at the end if the passes equal the length the function will return true
    return testPass === strings.length ? true : false;
}

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
