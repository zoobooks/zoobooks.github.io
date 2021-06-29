/*
 * OPERATORS:
 *
 * 0. In programming, operators tell the compiler or intpretor to perform mathematical, logical, 
 * and relational operations on operands to make values.
 * 
 * 
 * 1. Assignment operators assign the value of the right operand to the left operand with a signal 
 * equals sign or another operator next to the equals sign.
 */
 //this assigns the number 1 to x
 let x = 1;
 let y = null; //we will use this later but this did just get assigned to null
 console.log(x);//prints 1
 
// 2. Aritmetic Operators are operators that perform mathematical computations on operands, like +. -, /, and *

//addition
//a + b = c
console.log(1 + 2);//prints 3

//subtraction
//a - b = c
console.log(3 - 1);//prints 2

//multiplication
//a * b = c
console.log(2 * 2);//prints 4

//division
//a / b = c
console.log(10 / 5);//prints 2

/*
* 3. Logical Operators. In programming they're symbols used to connect expressions such that they become compound expressions.
*    They can be applied to any type, not only Boolean. In Javscript there are 4 logical operators "||" or, "&&" and, "!" not, and 
*    lastly "?? nullish coalescing. The or evaulates to two conditions having the same effect to operator on data if one conidtion
*    evaluates to true then the statment will be true. AND operator has two expressions that both have to be true in or to execute.
*    Not takes a statement that you know to be true but through negation means that something is the opposite to execute. Nullish
*    coalescing returns the right hand operand when the left hand operand is null or undefined. These provide a singal boolean output.
*/

if(x > 1 || x === 1){//this would check if our x above would be greater than one OR equal to it, this would executre the block below it
    console.log("This would return because x is equal to 1");
}
else if(x < 1 && x.typeof("number")){ //this would check if x is less than 1, and if it's type is number which is true. even though
    console.log("This won't execute");//the second condition is true it still wouldn't execute because the first condition is falsey
}                                     //(false & true) === false
else if(x!==1){     //this not would not execute the code because x IS equal to 1, it would only execute the block if it were equal to
    console.log("this won't execute"); //anything else but one
}
else if( y === true ?? x === 1){//this checks to see if y is null, which it is but would still execute because x IS equal to 1.
    console.log("This would typically execute if the first if wasn't here");
}
else{
    console.log("This will never execute");
}

/*
* 4. Comparison Operators compare values and return true or false
*
*
*
*
*
*/