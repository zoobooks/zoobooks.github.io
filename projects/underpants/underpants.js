// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function (value){
    return value;                   //pass in value and indentity returns that value
};



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value){
    if(value===null){
        return 'null';
    }
    else if(Array.isArray(value)===true){
        return "array";
    }//use object checker to check if object
    else if(typeof value ==='object'){
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
        return "undefined";
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//first takes in 2 arguements a array and a number
_.first = function (array, n){
    if(_.typeOf(array)!=='array'|| n < 0){              //if the arguement for the array is not an array or number is negative
        return [];                                      //return an empty array
    }
    else if(_.typeOf(n)!=='number'|| n===undefined){    //if number is not a number OR undefined
        return array[0];                                //return the first element of the array
    }
    else if(n>array.length){                            //if number is greater than the array length
        return array;                                   //return the whole array
    }
    else{
        return array.slice(0, n);                       //otherwise return the elements 0 through n
    }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (array, number){
    if(_.typeOf(array)!=='array'|| number < 0){                     //if the arguement for the array is not an array or number is negative
        return [];                                                  //return an empty array
    }
    else if(_.typeOf(number)!=='number'|| number===undefined){      //if number is not a number OR undefined
        return array[array.length-1];                               //return the first element of the array
    }
    else if(number>array.length){                                   //if number is greater than the array length
        return array;                                               //return the whole array
    }
    else{
        return array.slice((array.length)-number, array.length);    // otherwise subtract the number from the last index in the array to start
    }                                                               //slicing out the indexes all the way to the end of the array 
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value){            //index of takes an array and a value
    for(let i = 0; i < array.length; i++){      //iterate through the array
        if(array[i]===value){                   //if the index matches the value
            return i;                           //return the number of the index
        }
    }
    return -1;                                  //if it's not found return -1
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value){               //this takes an array and a value
    return array.includes(value) ? true : false;    //if the array contains the input value return true, otherwise return false
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, action) {                //each takes a collection and a function
    if(Array.isArray(collection)) {                     //if the collection is an array
        for(var i = 0; i < collection.length; i++) {    //loop through the array
            action(collection[i], i, collection);       //and call the function on the current element, index, and the array
        }
    } else {                                            //if the collection is an object
        for (var key in collection) {                   //loop through the object
            action(collection[key], key, collection);   //and call the function on the key, values, and the collection
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array){                            //unique takes an array
    return [...new Set(array)];                         //and returns a new array with all duplicates removed
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (arr, func){                        //filter takes an array and a function
    let result = [];                                    //initlizae the array we're going to return
    _.each(arr, function(e,i,a){                        //for each element, index, and the array
        if(func(e,i,a)===true){                         //if the function performed on the e,i,a returns true
            result.push(e);                             //push that element to the new array
        }
        });
    return result;                                      //return the array of true values
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (arr, func){                        //reject takes an array and a function
    let result = [];                                    //initlizae the array we're going to return
    _.each(arr, function(e,i,a){                        //for each element, index, and the array
        if(func(e,i,a)===false){                        //if the function performed on the e,i,a returns false
            result.push(e);                             //push that element to the new array
        }
        });
    return result;                                      //return the array of false values
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (arr, func){                 //partition takes an array and a callback function
    let result = [];                                //initilize the array
    let truArr = _.filter(arr, func);               //our true values will be returned with filter
    let falArr = _.reject(arr, func);               //our false values returned with reject
    result.push(truArr, falArr);                    //push both arrays into a new array with the truthy values first
    return result;                                  //return the array
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collection, func){                //map takes a collection and a function
    let result = [];                                //initilize the return array
    if(_.typeOf(collection)==='array'){             //if the collection is an array
        _.each(collection, function(e,i,a){         //for each element, index, and the whole array
            result.push(func(e,i,a));               //use the callback on e,i,a push the result to the new array
        });
    }
    if(_.typeOf(collection)==='object'){            //if the collection is an object
        _.each(collection, function(key,value,obj){ //for each key value pair and the object
            result.push(func(key,value,obj));       //perform the function all of them and push the result to the array
        });
    }
    return result;                                  //return the newly mapped array
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (arr, prop){                     //pluck takes an array and a property
    return _.map(arr, function(obj){                //return a newly mapped array with the objects properties "plucked"
        return obj[prop];                           //from the array
    });
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function (collection, func){                          //every takes a collection and a func
    if(func !== undefined){                                     //if the function is not undefined
        if(_.typeOf(collection)==='array'){                     //and the collection is in fact an array
            return _.filter(collection, func).length === collection.length ? true : false; //filter all the truthy values, and if the length of the truthy
        }                                                                               //array is the same length as the length of the input then return true
        if(_.typeOf(collection)==='object'){                    //for object loop through the keys
            for (let key in collection) {                       //if the function performed on the object returns false for any key value pair in the object
                if(func(collection[key], key, collection)===false){//return false, EVERY return must be truthy
                    return false;
                }
            }   
            return true;                                        //if it passed without any false returns then the object has all truthy valuess
        }
    }
    else{                                                       //if function is not provided
        if(_.typeOf(collection)==='array'){                     //and the object is an array
            for(let i = 0; i < collection.length; i++){         //if any collection is false then this returns false
                if(collection[i]===false){
                    return false;
                }
            }
            return true;                                        //otherwise true
        }
    }
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collection, func){                               //some takes a collection and a func
    if(func !== undefined){                                         //if the function is not undefined
        if(_.typeOf(collection)==='array'){                         //and the collection is an array
            for(let i = 0; i < collection.length; i++){             //loop through the array
                if(func(collection[i])===true){                     //upon encountering ANY truthy values
                    return true;                                    //return true
                }
            }
            return false;                                           //otherwise return false
        }
        if(_.typeOf(collection)==='object'){                        //if collection is an object
            for (let key in collection) {                           //loop through the object
                if(func(collection[key], key, collection)===true){  //if any key value pair or the object is true
                    return true;                                    //return true
                }
            }
            return false;                                           //otherwise return false
        }   
    }
    else{                                                           //if function is not defined
        if(_.typeOf(collection)==='array'){                         //and we still have an array
            for(let i = 0; i < collection.length; i++){             //iterate through the collection
                if(collection[i]===true){                           //if there are any truthy values
                    return true;                                    //return true
                }
            }
            return false;                                           //otherwise return false
        }
    }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function (arr, func, seed){                                      //reduce takes an array, a callback function, and an initial value
    if(!arr.length && seed===undefined){                                    //if there is no array and the initial value is not given
        throw new TypeError("Reduce of empty array and no initial value!"); //throw and error
    }
    let accumulator = seed;                                                 //set our accumulator to the initial value
    let index = 0;                                                          //and set our loops index start place
    if(seed===undefined){                                                   //if initial value is not give
        accumulator = arr[0];                                                //reset accumulator to the first index in the array
        index = 1;                                                          //and our new starting position in the loop is set to "1"
    }
    for(; index < arr.length; index++){                                     //start looping through the array all the way to the end of its length
        accumulator = func(accumulator, arr[index], index, arr);            //for each iteration accumulator is set to the callback functions return from
    }                                                                       //performing whatever action on the accumulator, element, index, and the whole array
    return accumulator;                                                     //when array is done return our new reduced result

};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (obj1, ...obj2){                    //extend takes multiple items as an arguement
    return Object.assign(obj1, ...obj2);                //then assigns each property in each object to each other with the spread operator, then returns those
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
