////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step){
    let result = [];            //initialize array
    return start === end ? result : start > end ? neg(start, end, step) : pos(start, end, step);
    //this returns an empty array is start and end are equal, if they aren't it calls either the positve range or negative range functions

    function pos(start, end, step){
        if(step < 1){                           //if the step is a negative number the function returns an empty array
            return result;
        }
        else if(step === undefined){            //if the step is undefined we set the step to 1
            step = 1;
        }
        for(let i = start; i <= end; i += step){//this is the start of the positve array, array increments by the step
            result.push(i);                     //push each i to array;
        }
        return result;                          //the final return
    }
    function neg(start, end, step){
        if(step > 1){                           //if the step is a positive number for the negative function, return empty array
            return result;
        }
        else if(step === undefined){            //if the step is undefined, set the step to negative 1
            step = -1;
        }
        for(let i = start; i >= end; i -= step){//negative array starts at end decrements by the step
            result.push(i);
        }
        return result;                          //return the result
    }
}
        
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
    //this reduce function adds all elements in an array and returns it
    return arr.reduce((x , y) => x + y, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
    //this reverse array is a pure function that copies each element to a new array
    let revArr = [];
    //start at the new arrays first index, and our inputs last index
    //loop stops when at array.length, our new array increments, input decrements
    for(let i = 0, j = arr.length - 1; i < arr.length; i++ , j--){
        revArr[i] = arr[j];         //copy each element of old array to new
    }
    return revArr;                  //return the new array
}
  

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {     //reverse in place takes in an array as arg
    return arr.reverse();               //and reverses it in place with reverse function
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
    //this send an array to a list by using reduceRight on the input array
    //each element in array has a value from array and the rest points to the other element from the end
    return arr.reduceRight((rest, value) => ({rest, value}), null);     //null is the initial value
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(linkList) {    //this function returns an array from a linked list
    let result = [];                //initilize an array to store Linked List values
    let head = linkList;            //set the linked list to head
    
    while (head !== null){          //while the head is not equal to null (null is the last value)
        result.push(head.value);    //push each value to the array
        head = head.rest;           //then set the head to the next list    list-->list-->list
    }
    return result;                  //return the array of values
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//inserts value into list at first position (before all other elements
function prepend(value, list) {
    

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
    //this function takes 2 arguements and serializes everything and compares every part of it
    //if x and y are actually alike then the function will return true, otherwise false
    return JSON.stringify(x) === JSON.stringify(y) ? true : false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
