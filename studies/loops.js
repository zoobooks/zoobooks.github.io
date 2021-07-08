/*
* Loops and looping in computer programming is an instruction that repreats until a specified condition is met. With a loop, there is a question asked
* and if the desired outcome is not fulfilled immediately then the loop will iterate again, searching for that answer. In programming there are a few
* different types of loops like count-countrolled loops that repeat for however many iterations, there are condition-controlled loops, that repeat
* until a certain condition is met (like a Boolean statement), and infinite loops that are usually the result of an error in the programmers part. 
* Loops can be used to parse data and manipulate it, like a count-controlled for loop parse an array and manipulating it as an example. In Javascript
* we have 3 main loops and those are the "For Loop", "While-Loop", and the "For In Loop."
*/

//For Loops

/*
* In computer science a for-loop is a control flow statment, that iterates till a condition is met, inside the loop there is some instruction
* that is executed for every iteration. 
*/

//First I would like to create an array to iterate over
let rocks = ["Granite","Obsidian","Basalt","Slate","Quarzite"];

// when declaring a loop, start with the keyword for, and initialize a variable in the parenthesis as the iterator and its starting places and then use a semi-colon to close it
// now create the stopping condition, in this particular we will stop before the iterator equals the length of the above array, and close it with a semi-colon
// now since we're going forward, lets increment with "++", this finishes the conditions, now we make the array do something..

for(let i = 0; i < rocks.length; i++){
    console.log(rocks[i]);
}

//The above array prints to console with each iteration

/*
*    Granite                <-- i = 0     
*    Obsidian               <-- i = 1
*    Basalt                 <-- i = 2
*    Slate                  <-- i = 3
*    Quarzite               <-- i = 4
*/

//now to loop backwards through the object 
//first we declared that the loop start at the end of the array
//and once i is above "-1" the loop is done
//since i is starting at the 4th index of the array we loop backwards with "--"
for(let i = rocks.length-1; i > -1; i--){
        console.log(rocks[i]);
}

//The above array prints to console with each iteration

/*
*    Quarzite       <-- i = 4
*    Slate          <-- i = 3
*    Basalt         <-- i = 2
*    Obsidian       <-- i = 1
*    Granite        <-- i = 0
*           BREAK
*/

// The loop stops because there is nothing left to print in the array and the stopping condition 
// is that i never exceeds 4, it continues as long as i is less than 5.

//While Loops

/*
* In computer science a while loop is a control flow statement that executes instructions based upon a Boolean condition, 
* it can be thought of as a repeating if statment.
*/

let i = 5;              //first initialize a value

while(i < 10){          //if i is less than the number 25, execute the code in the block 
    console.log(i);     //this console logs the current value of i
    i++;                //and this increments i, eventually hitting the number 24
}

/*           
    5                   //initial value of i, and it loops several times 
    6
    7
    8
    9
    9                   //eventually hitting the last number in the loop, and ends
*/

//now lets do it backwards

let j = 5;                  // declare varible

while(j > 1) {              // while j is greater than 5 loop
	console.log(j); j--;    // print the value of j and decrement
}

/*           
    5                   //this was the starting value, we decrement and eventually hit the last value in the loop
    4
    3
    2           
    2                   //eventually hitting the last number in the loop, and ends
*/


//For In Loops

/*
* For In loops iterates over enumerable properties in an object, with keys that are strings. For-in loops are control flow statements that 
* specify iteration, and allows instructions to be executed repeatedly. F
*/

//first lets create an object to loop throuh
let person = {
    name: "jeremy",
    car: "jeep",
    favfood: "jamabalya",
    favmood: "jumanji"
};

//this loop will loop 4 times
for(let key in person){         //for each key in the object the loop iterates
    console.log(person[key]);   //printing out the value for each key.
}

//the console returns each value for each key

/*
    jeremy
    jeep
    jamabalya
    jumanji
*/