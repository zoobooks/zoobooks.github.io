// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    //create loop that will start at 1 and end at 100
    for(let i = 1; i <= 100; i++){
        //if there is a multiple of 3 or 5 print Fizzbuzz
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        //if there is a multiple of 3 print Fizz
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        //multiple of 5 print buzz
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        //else just print the number
        else{
            console.log(i);
        }
    }
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}