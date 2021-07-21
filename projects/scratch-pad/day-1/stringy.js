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
 */                 //return the length of a string with .
let length = string => string.length;
    


/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    //return the input string to lowercase
    return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    //return the input string to uppercase
    return string.toUpperCase();
}

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
 */
                        //return the string to lowercase and split and then join them by dash
let toDashCase = string => string.toLowerCase().split(" ").join("-");
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
 */
 //check to see if first character of the string is equal to the input letter, if it is return true, else return false
let beginsWith = (string, char) => string[0].toLowerCase() === char.toLowerCase() ? true : false;

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
 */
 //check to see if the last character of the string is equal to the input character, if yes return true, else return false
let endsWith = (string, char) => string[string.length-1].toLowerCase() === char.toLowerCase() ? true : false;
    
/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
                                        //concatonate the 2 arguements
let concat = (stringOne, stringTwo) => stringOne += stringTwo;

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    //return a string of all inputed arguements that were sent to an array and then join them together
    return Array.from(arguments).join("");
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    //if string one is longer than 2 return the first one (truthy) else return the second one (falsey)
    return stringOne.length > stringTwo.length ? stringOne : stringTwo;
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // if the string are equal (true) return 0, else (falsey) if stringOne is greater return 1 (truthy) else its not, return -1 (falsey)
    return stringOne === stringTwo ? 0 : stringOne < stringTwo ? 1 : -1;
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // if the string are equal (true) return 0, else (falsey) if stringOne is lesser return 1 (truthy) else its not, return -1 (falsey)
    return stringOne === stringTwo ? 0 : stringOne > stringTwo ? 1 : -1;
}


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
