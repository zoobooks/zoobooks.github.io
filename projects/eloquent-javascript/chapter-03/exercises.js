////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//if x less than y, return x else see if they're equal,if they are return x, if not return y
let min = (x, y) => x < y ? x : x === y ? x : y;
   

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let isEven = x => x === 0 ? true : x === 1 || x < 0 ? false : isEven(x-2);
  //so this recursively checks if a number is even or odd
  //if x === 0 it is even and divisble by 2, return true
  //if the number is odd and divisible by 1 OR less than 0, return false
  //otherwise call the function again and subtract 2 from the input
////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
  //created and initialized a string counter
  let count = 0;
  //a for loop to loop through the string to check each character
  for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase()===char.toLowerCase()){//if the current index and char are equal
      count++;//increment the count
    }
  }//at the end return the number
  return count;
}


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//this function counts the b's in a string
let countBs = str => countChars(str, "B");
 //call the countChar function from last prompt and set the second arguement to "B"
 //it returns the number of "b's"

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
