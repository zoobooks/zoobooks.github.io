/*
* Functions in programming are self-contained blocks of code that perform a task, in Javscript they're objects. Functions are reusable, 
* accept inputs, and return outputs. 
*/

// The 2 phases of using functions.

/*
* Function need to be declared in order to be stored in memory. In javascript we declare with the function keyword, or in ES6 syntax
* we can declare them with stardard variable names and arrows. To use the function that we've created we invoke or call that 
* function. 
*/

//first we declare a function

function funkyBoi(){                                    //<-- the syntax for this basic named function is the function keyword 
                                                        //first, a name (funkyBoi), parenthesis that COULD take arguements
                                                        //and open curly braces to execute a block of code.
    console.log("Hey, uuhhh I'm a function.. uh");      //<--this is what's being executed
}   //<---and here is the block being closed

//now to invoke this function we type the function's name followed by parentheses and a semi-colon.
funkyBoi();     //<-- this prints to console "Hey, uuhhh I'm a function.. uh"

// How do we assign a function to a variable?

// 1. we can assign function to variables by first using a variable declaration like var, const, and let
// 2. followed by assigning it name (note that this is another named function)
// 3. next we assign the function keyword to the variable followed by the parenthesis
// 4. inside the parenthesis for this instance we have a paramenter that will accept arguements
// 5. curly braces to open our block of code

let funkyBoi2 = function(x){
    return x*x;                     //<--- this is the code that will execute, x multiplies itself with itself
};                                  //<--- closing the block followed by a semi colon

//now lets call funkyBoi2
funkyBoi2(4);  //<-- again we invoke the function with it's name and this time we have an arguement, 4
//this function returns to console the number "16."

//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?

/*
* Parameters are the optional inputs a function takes, when the function is invoked with some input
* in the function's parenthis then whatever that might be is called the function's arguements.
* Functions can return values with return statments, functions can also return nothing.
*/

//here is another function declaration with multiple parameters
let funkyBoi3 = (x, y) => x + y; //<-- this is an arrow function with implicit return

//lets invoke the function with multiple arguements
funkyBoi3(3, 538); //<--- the console returns 541

// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

/*
* Functions have access to variables declared in the functions parent scope, inside it's own scope, and global scope.
* Variable declared inside of a function are within that functions local scope, these variables are not
* accessible to functions outside of this scope. "Let" and "Const" are variables that are defined within 
* block scope that they were declare and initialized within. Var on the other hand is function scoped.
*/
var space = " ";                        //<-- we declare a globally accessed variable that our function WILL have access to

function funkyBoi4(){                   // function declaration
    let lemon = "lemon";                // a let that is scoped to the block
    function inside(){                  // another function in the block
        const lime = "lime";            // a declaration inside the internal function
        console.log(lemon+space+lime);  // this console log will print a message with access to variables in the global scope and its parent scope
    }
    inside();                           //call the inside function
}

funkyBoi4();                            //we call the function and it calls the inside function and prints to console "lemon lime"

console.log(lemon);                     //if we try to console log "lemon" we get a reference error because it is bound to the block of funkyBoi4()

// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
// that closure stays ALIVE, and data can continue to exist in these closures!

/*
* A closure is when a function has access to references in it's surrounding lexical state. a closure allows an inner function
* to reference variables from another function in the lexical state even once the other function is down executing
* because it is now stored in memory. This is used a security measure to enable data privacy, because the variables that are 
* accessible are only within the scope of the outer function.
*/

//we define another function that takes two arguements
function funkyBoi5(fruit1){
    let str = "all those good things..";                    //<-- this is a block scoped variable 
    return function scraw(fruit2){                          //<-- this function scraw concatonates the 2 arguements and acccess the variable in its parent scope
        console.log(fruit1 + ", " + fruit2 + ", " + str);   //this is function
    };                                                      //the main function takes in another arguement without letting the user know the name of the second 
}                                                           //function

funkyBoi5("strawberry")("raspberry");                       //we can call funkyBoi5 with it's single arguement and another arguement without seeing the other function

//this prints to console "strawberry, raspberry, all those good things.."