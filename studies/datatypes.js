/*
* In computer science datatypes are the attributes given to data to tell the compiler how that data is to be handled.
* Most languages sport several basic datatypes like integers, floating point numbers, characters, and booleans.
* The datatype used defines what operations will be performed to the data. Since Javascript is a "loosely typed"
* language, you don't have to classify the type of variable. Javscript is also a dynamically typed language so
* the variable isn't known at run time and overall means that it's slightly quicker type because the compiler doesn't 
* require static type checking. 
*/

//Numbers

/*
* Numbers a primitive datatype used to represent a positive or negative integer, they're considered a primitive wrapper type.
*/

let num = 23;       //we just assigned the number 23 to x

console.log(num);   //this will print 25 to console

console.log(num-26);//we just subtracted 26 from 23, this will console.log a negative number, "-3"

//Strings

/*
* Strings are representation of text and are also a primitive datatype, even though they're priminitve they can be manipilated
* in a similar fashion to arrays because they're 0th-indexed
*/

let name = "Jeff Loomis"; //name is assigned a string value.

console.log(name);      //console.log prints "Jeff Loomis" to console

//Booleans

/*
* Booleans are simple data types that hold only true or false, 0 or 1, Off or On.  
*/

//we have a function below for the function datatype, this section is to only express what Booleans are
//we actually created a function see "lights" that gets hoisted for the boolean example

let lightSwtich = true; //this variable is a boolean, I'm turned the lights on

lights();
//lights are on so the console will log to ""lights are on!""

lightSwtich = false; //turn the lights off with the reassignment
lights();
//lights are off now so the console will log to "lights are off!"


/*
* Undefined is a property of the global object and is a primitive type, it get returned when variable or arguement is unassasined, or if there 
* is not arguement in a function that requires an arguement. Undefined can be used with "stricky equals" as a means to check to see if an 
* arguement has a value.
*/

//we define a function that takes 2 arguements
function funcky(x ,y){
    //this function returns them concatonated
    return x + y;
}

//we pass "strudle" as the first arguement and nothing for the y parameter
funcky("strudle", );
//this function prints to console "strudle undefined"

//Null

/*
* Null acts as the absence of a value entirely but different than undefined in a sense that it is intentional. With boolean operations it is 
* falsey. Null is another Javascript primitive datatype. The best analogy I've heard for 'null' is that it like an empty box, whereas undefined
* is the total absence of anything.
*/

funcky("strudle", null); //we just passed null into the above function

//funcy return "strudlenull"

//NaN

/*
* NaN is a global property that is "Not A Number". NaN is another primitive datatype and is usually the result of trying to performation 
* mathematical operations on something like a string, though they can be useful for testing against.
*/

function randy(x){          //we define a function that takes a value
    console.log(x*x);       //we console.log that value muliplied by itself
}

randy(2);                   //this log "4"
randy("marsh");             //this string logs "NaN" because it is not a number

//Infinity and Negative Infinity

/*
* These represent the highest possible and lowest possible numbers mathematically.
*/

randy(Infinity); //returns Infinity;
randy(-Infinity); //returns -Infinity;

//Arrays

/*
* Arrays are complex datatypes used for storing multiple elements into one list. They can be iterated over, have several methods
* can be copied by reference, and look like a list but should not be confused with a list. Arrays are 0th indexed, can be accessed
* directed by referring to said indexes, and iterated over with loops.
*/

//lets defined an array of candys
let candy = ["twix", 100000, "M&M's", "Butterfinger"]; //we have a array of strings and one of the elements is a number
console.log(candy);
//This console.log prints to console "["twix", 100000, "M&M's", "Butterfinger"]"

//lets remove the number and replace 100000 with the string "100 Grand"
candy.splice(1,1);        //this remove the 100000 element
candy.push("100 Grand");  // this puts our replacement onto the array
console.log(candy);       //this will print to console "[ 'twix', "M&M's", 'Butterfinger', '100 Grand' ]"

//Objects

/*
* Objects are another complex datatype that allows you to store various keyed collections. Even though just about everything in OOP
* is an object these special in a sense they're actually objects and are created with the Object() constructor. Objects contain properties
* in key-value pairs. values can be any datatype, even arrays. Objects can be looped through using "For-In" loops. 
*/

let salesman = {        //we created a new instance of an object, a man who sells candy
    name:"Leopold",     //his name, which has the key "name" is the string "Leopold"
    country: "Moldova", //his country of origin is Moldova
    wares: candy        //and his wares is the candy array we made earlier
};

console.log(salesman);
/*
    the console logs this object to console
    {
      name: 'Leopold',
      country: 'Moldova',
      wares: [ 'twix', "M&M's", 'Butterfinger', '100 Grand' ]
    }
*/

//we can create new properties in our object with dot notation and bracket notation

salesman.rich = false;              //we assigned a boolean as a value with dot notation
salesman["disposition"] = "sunny";  //string to another value with bracket notation

console.log(salesman);
/*
    the console logs this object to console, NOTICE THE UPDATED OBJECT
    {
      name: 'Leopold',
      country: 'Moldova',
      wares: [ 'twix', "M&M's", 'Butterfinger', '100 Grand' ],
      rich: 'false',
      disposition: 'sunny'
    }
*/

//Function

/*
* Functions execute blocks of code, and are also considered objects. When used with typeOf though it will return "function".
* A function excutes when it is invoked or called upon depending upon the vernacular in whatever programming language you're coding in.
* Functions take parameters and those are called arguements when calling that function. functions can be declated with the keyword "function",
* or not if you're using arrow functions.
*/


//this function lights, checks for a boolean and if the lights are true (MEANING ON), it evaulates to true
function lights(){ 
  lightSwtich === true ? console.log("lights are on!") : console.log("lights are off!");
}

lights();
//lights are off now so the console will log (or return) to console "lights are off!"

//Undefined

//The Difference Between Complex and Primitive Datatypes

/*
* Javascript has both primitive and complex datatypes. Primitive datatypes are copied
* by value, immutable, not an object, and have no methods. Complex datatypes are composed from other datatypes and are 
* mutable, copied by reference, and have methods. And if two arrays or two objects are compared to each other they are
* are NOT strickly equal, meanwhile primitive values are.
*/

//These is no way to change a primitive once it's assigned 
let a = "Fernando"; //we define a string 
a[2] = "O";         //we try to redefine the 3rd index as a big letter o
console.log(a);     //console.log still prints "Fernando" because strings are immutable

//How if we attempt this same thing with an array...
let b = ["L","O","L"];
b[2] = "K";          //reassign the 3rd index to "K"
console.log(b);     //console.log will print "["L","O","K"]" because arrays are complex and mutable