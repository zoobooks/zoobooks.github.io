
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function triangles takes a number and prints a row of triangles going down based upon the number
function triangles(num) {
  //initialize string
  let str = "";
  //while the strings length is less than the input
  while(str.length < num){
    //increment a pound sign to the string and console log it
    str += "#";
    console.log(str);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//fizzbuzz should console log fizz, buzz, and fizzbuzz in appropriate places to 15
function fizzBuzz() {
  //let i be 1 and we will stop the loop at 16
  for(let i = 1; i < 16; i++){
    //if i is divisble by both 3 and 5 print fizzbuzz, else move on
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    }//if i is only divisble by 3 print fizz
    else if(i % 3 === 0){
      console.log("fizz");
    }
    else if(i % 5 === 0){       //if i is divisble by 5 print buzz
      console.log("buzz");
    }
    else{
      console.log(i);           //else just print the number we're on in the loop
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//this function should dynamically draw a chess board with a given size arguement 
function drawChessboard(size) {
  let board = "";                   //create empty string to store board in
  for(let i = 0; i < size; i++){    //take size and loop to break lines
    for(let j = 0; j < size; j++){  //take size and draw each line
      if(i % 2 === 0){              //if i is even cycle through the first if 
        if(j % 2 === 0){            //if j is even draw an empty space
        board += " ";
        }
        else{
          board += "#";             //otherwise j is odd draw pound sign
        }
      }
      else{                         //if i is odd cycle through this if chain
        if(j % 2 === 0){            //this one alternates if j is even
          board += "#";             //draw a pound to board
        }
        else{                       //j is odd draw a blank space to the board
          board += " ";
        }
      }
    }// 2nd loop close              //through each cycle of first loop draw
  board += "\n";                    //a line break to the board
  }
  console.log(board);               //at the end of both loops, print board
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
