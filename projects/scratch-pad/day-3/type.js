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
 */                 //return true if our value is an array, false if not
let isArray = value => Array.isArray(value) ? true : false;
/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    //if the object is not a type of "object" it will return false, then it will check to see if the other types are "NOT" truthy, these will return false
    return typeof(value)!=="object" ? false : value!== null && isArray(value)!==true && !(value instanceof Date) ? true : false;
}
/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 //if array check or object check are true then the function returns true, else false
let isCollection = value => isArray(value) || isObject(value) ? true : false;

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
 */ 
function typeOf(value) {
    //check all the datatypes with our own typeOf function
    //use the array check to check if array
    if(isArray(value)===true){
        return "array";
    }//use object checker to check if object
    else if(isObject(value)===true){
        return "object";
    }//use typeof to check if string
    else if(typeof(value)==="string"){
        return "string";
    }//use typeof to check if number
    else if(typeof(value)==="number"){
        return "number";
    }//use typeof to check if undefined
    else if(typeof(value)==="undefined"){
        return "undefined";
    }//use typeof to check if boolean
    else if(typeof(value)==="boolean"){
        return "boolean";
    }//use instance of to check for date
    else if(value instanceof Date){
        return "date";
    }//use typeof to check if function
    else if(typeof(value)==="function"){
        return "function";
    }//else its probably null
    else{
        return "null";
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
