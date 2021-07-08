/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
console.log(myVariable); // prints to console 1

var myVariable = true;
console.log(myVariable); // this was reassigned and now prints to console true

myVariable = "someString";
console.log(myVariable); // now prints "someString" because it was redefined


//var

/*
 * A var statment declares a variable. If a var is declared inside of a function it is function scoped, if var is declared outside of any fuction 
 * var will be hoisting and is globally scoped. If there is a function scoped var, it is only available, in the function it was declared inside of.
 * Var can be assigned, reassigned, and updated. With the advent of ES6 using var is becoming less common as there were problems with var being
 * function scoped. Now people tend to use "let" in place for "var"
 */
 
 var color = "blue";        // this is a globally scoped var
 console.log(color);        // this prints to console "blue".
 
 //because this was declared globally this particle var is hoisted and available anywhere in this program.
 
 function colorizer(){      // this is function declaration to declare a var inside of
     var color1 = "red";    // color1 is a declared var
     console.log(color1);   // this prints to console "red" when function is called
 }
 
 colorizer();               // this prints to console "red"
 console.log(color1);       // this var however throws a reference error because it's trying to access a var that is function scoped
 
 
 //let
 
 /*
 * "let" is a block scoped variable, but also another difference between var and let is that when var is initialized it is hoisting to the top of the 
 * function, let can only be accessed when the interpretor reads it. "let" is available to any function declared within the block as well as any 
 * sub-blocks. Redeclaring a let within the same function or block throws a syntax error.
 */
 
 console.log(car);      // ReferenceError: Cannot access 'car' before initialization
 let car = "subaru";    // The above call wouldn't work because the let has to be initialized before the call, this is called the temporal deadzone
 console.log(car);      // This prints to console "subaru"
 car = "dodge";         // also it is totally fine to reassign let
 console.log(car);      // this prints to console "dodge"
 
 
 //const
 
 /*
 * "const" varable are block scoped, just like let, the only difference is "const" can't be reassigned or redeclared, Just because const can't be reassigned
 * or redeclared doesn't mean const should be conflated with being immutable. Const should be declared if you don't want the value inside of it changed at
 * all.
 */
 
 const pizza = "pepperoni"; // is the initial and only assignment we can have of const
 console.log(pizza);        // this prints to console "pepperoni"
 pizza = "sausage";         // if we attempt to reassign const the console will throw an error
 console.log(pizza);        // TypeError: Assignment to constant variable.
 
 //Hoisting
 
 /*
 * Hoisting is when Javascript moves variable declarations and functions to the top of the current scope. functions and var (if they're declared outside of
 * a function) are hoisted to the top, globally. Let and const are hoisted to the top of their block scope, but are inacessable until they're initialized. 
 * Var values will return "undefined" if they're referenced before their declaration.
 */
 
 // More on Temporal Deadzones
 
 /*
 * To reiterate the TDZ is when variables are not reachable to the interpreter because they're not declared, they maybe scope to their blocks, or like var
 * globally scoped but they're not initialized, this in turns is the cause of references errors, unless its a var and then it is a reference error. 
 * Declaring a variable is setting a spot in memory for a value, initializing a variable is putting "something" in that metaphorical box. There is a point to
 * the temporal deadzone, point being it helps handles errors. Javascript rational semantics overall would be less rational if one could just declare const
 * and it were accessible anywhere in the program, this example would cause a lot of problems due to hoisting.
 */
 
 console.log(dog);          // ReferenceError: Cannot access 'dog' before initialization
 //DEADZONE
 //DEADZONE
 //DEADZONE
 let dog = "corgi";         // initialization
 console.log(dog);          // console prints "corgi"