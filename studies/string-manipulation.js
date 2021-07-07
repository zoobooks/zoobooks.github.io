/*
* 1. In Javascript as well as a plethora of other programming languages, strings are primitive values that store plain text.
* In terms of how methods can act on them it is helpful to think of them almost like arrays, they are 0th indexed and can be manipulated in a similar fashion.
*
*
* 2. String Operators
*  Contcatonation - string can be joined together using the unary operator "+" as well as the .concat method!
*/
let enjoy = " Enjoy your stay!";
let firstName = "Zack";
let lastName = "Blaise";
let fullName = firstName + " " + lastName;
console.log(fullName); //this example will return my first name and last name joined together with a space in between them.
//console.log returns "Zack Blaise"

/*
* Strings can also be concatonated with the "+=" operator, also called the add operator which also have a similar function for adding the indexs of arrays
* together.
*/
let welcome = "Welcome ";
let message = welcome += fullName += "!";
console.log(message); //this example will return my first name and last name joined together with a space in between them.
//console.log returns "Welcome Zack Blaise!"

//.CONCAT METHOD
let enjoyment = message.concat(enjoy); //we concatonated the enjoy variable onto our original message
console.log(enjoyment); 
//this logs "Welcome Zack Blaise! Enjoy your stay!" to console

/*
* The indexOf method will take a parameter of a string to search a string for and will return its index values if found, its it not found 
* it will return -1 instead.
*/

console.log(message.indexOf("Zack"));
//console.log will return the index number of 8, which is where the string "Zack" starts

/*
* STRING EXTRACTION
* The slice() method extracts part of a string by index and returns it without altering the original string.
*/

let sliced = message.slice(5,12);
console.log(sliced);
//this console log returns the sliced message of "me Zack" from out message string

/*
* The indexOf method will take a parameter of a string to search a string for and will return its index values if found, its it not found 
* it will return -1 instead.
*/

/*
* We can also extract parts of strings with the .substr method. Just like the slice method you input the indexes you want to extract strings from
* and it extends for however my characters after.
*/

let sub = sliced.substring(3, sliced.length);
console.log(sub);
//this substring method extracts "Zack" from the sliced variable and console.logs only Zack by index, leaving out "me ", It extracts the rest of the string
//by using .length on it starting from where we initially extracted, at index 3

/*
* Strings can also be replaced with .replace. This method searches for a pattern and returns a new string with whatever the arugment word is.
*/

let reWelcome = message.replace("Welcome", "Greetings");
console.log(reWelcome);
//this logs to console "Greetings Zack Blaise!"

/*
* With the .toUpperCase() and toLowerCase() methods we can alter the case of the string, it returns a new string not altering the original.
*/

console.log(message.toUpperCase());
//this logs "WELCOME ZACK BLAISE!" to console
console.log(message.toLowerCase());
//this logs "welcome zack blaise!" to console

/*
* With the CharAt() you can return the string letter by inputing a index position. It takes in a string and a character
*/

let letter = enjoyment.charAt(11);
console.log(letter);
//this prints the letter "k" to console because it is in the 11th position in the message "Welcome Zack Blaise! Enjoy your stay!".

/*
* And finally we can convert strings into arrays, which makes them easier to manipulate. This method divides strings into an ordered substring and returns
* an array.
*/

let strArr = enjoyment.split(""); //by entering in an empty string into the parameter we're able to divide each letter into it's own elsement in the array
console.log(strArr);
/*
* The console log above returns this array of strings, each letter is it's own element
* [
*  'W', 'e', 'l', 'c', 'o', 'm', 'e',
*  ' ', 'Z', 'a', 'c', 'k', ' ', 'B',
*  'l', 'a', 'i', 's', 'e', '!', ' ',
*  'E', 'n', 'j', 'o', 'y', ' ', 'y',
*  'o', 'u', 'r', ' ', 's', 't', 'a',
*  'y', '!'
*  ]
*/

/*
* After we're down manipulate each element say in a for loop as an example we can rejoin them with a .join method. ".join()"" takes in an arguement as to what
* will be placed in between each character in the return string. For instance if the character is ("") it will look very similar to before.
*/

console.log(strArr.join(","));
//This console log message returns a string from an array, but each letter is seperated with a comman.
//"W,e,l,c,o,m,e, ,Z,a,c,k, ,B,l,a,i,s,e,!, ,E,n,j,o,y, ,y,o,u,r, ,s,t,a,y,!" prints to console