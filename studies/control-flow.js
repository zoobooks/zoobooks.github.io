/*
* Control flow is the order that the interpreter executes statements in a programming language. Control structures make it so we can
* manipulate these events. These structures are conditionals, loops, and functions. The ";" semicolon is used to seperate statements
* in Javascript. A block statement is a group of statements delimited with curly brackets.
*/

//I will demonstrate an If-Else chain below, which is a form of Control Flow
let color = "blue";

if(color === "black"){
    console("This message won't execute because the above condition is false");
}
else if(color === "blue"){
    console.log("This color is blue so this message gets logged to console");
}
else{
    console.log("this message will not be logged because we have already satisfied the condition!");
}
//The above if else chain logs "This color is blue so this message gets logged to console" 

/*
* What is actually happening above is that there is variable declared with conditions that could be true or false. The color is declared to be blue
* is is being evaluated in if-else chain. If the first condition is true then the code inside that block would be executed, but it is false and
* the interpreter moves on to the next condition to see if the next block will satisfy that condition with true. The condition is satisfied with 
* true in the next block. The interpreter will never get to the else statement but if both condition weren't true then by default it would be 
* satisfied with the else statement.
*/

/*
* Switch statement are another means of control flow. It is another selection control mechanism via search and map. Unlike "If-Else" statements,
* switch statements have "breaks," ,"cases', and use "default as if it's an else statement".
*/

//below is an example of a switch statment, using the same color variable from above

//the syntax has there be a condition that has be evaluated with the word "switch"
switch(color){//notice we're using color again
    case'yellow':{//<--false
        console.log("This won't execute, unless color is yellow, It's not though!");
        break;//<--- notice that unlike if-else staments we have breaks to get us out of block if the condition is truthy
    }
    case'red':{//<--false
        console.log("This won't execute, unless color is red, still not right!");
        break;
    }
    case'green':{//<--false
        console.log("Nah, wrong");
        break;
    }
    case'blue':{//Color is still blue so the message below is what will be sent to console//<---TRUE
        console.log("Is this the color? oh wow it is, This is what will be logged to console!!");
        break;
    }
    case'black':{//<--- this won't be evaluated because the case above was true.
        console.log("Interpreter will never reach this statement, this won't be evaluated because our condition is satisfied");
        break;
    }
    default://this is the switch statement equivelent to a else statement
        console.log("all conditions are satisfied so this won't be seen");
}
////This switch statement prints to console "Is this the color? oh wow it is, This is what will be logged to console!!"
