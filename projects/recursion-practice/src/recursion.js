// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //if n is less than 0 return null
  //else if n is equal to 1 or 0 return 1
  //else n get's multiplied by n-1 and the function gets called again recursively
  return n < 0 ? null : (n ===1 || n === 0) ? 1 : n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //if array is equal to 0 return the 0 or all numbers added on the stack
  //if array is equal to one 1 return the first index
  //otherwise add the first index to the next index with array sliced
  //all of the numbers are return from the stack once array.length === 0
  return array.length === 0 ? 0 : array.length === 1 ? array[0] : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
//base case is 0, if the number gets subtracted equally down to 0 then it is indeed even
//if the number is added or subtracted down or up to 1 or -1 it is odd
//if the current number is not equal to 0, 1, or -1 call the function recursively until the outcome is reached
var isEven = x => x === 0 ? true : x === 1 || x === -1 ? false : x < -1 ? isEven(x+2) : isEven(x-2);

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case: if n === 0, return 0 or all numbers added on stack
  //if n is a negative number, call the negative version of the function that adds n to n incremented by one, function gets called recursively
  //else condition is sumbelow adds n to n -1 one and calls the function recursively
  return n === 0 ? 0 : n < 0 ? n + 1 + sumBelow(n + 1) : n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //if x is less than y, i.e. (3,5)
  if(x<y){
    //if y - x equals 1 or y - x equals 0 return an empty array
    if(y-x === 1 || y-x === 0){
    return [];
    }
    //if y - x equals 2 return x + 1// this is what starts our integer list
    if(y - x === 2){
      return [x+1];
    }
    else{
      //list is undefined until [x+1] gets returned
      //list is assigned to range function, this is where the function gets called
      var list = range(x, y-1);
      list.push(y-1);
      return list;
    }
  }
  //if x is greater than y, i.e. (5,2)
  if(x>y){
    //if x - y equals 1 or x - y equals 0 return an empty array
    if(x - y === 1 || x - y === 0){
      return [];
    }//to meet the condition to everytuall return the first number after x
    //we must subtract instead of add because x is bigger
    if(x - y === 2){
      return [x-1];
    }
    else{//this is the same logic as x being smaller than y except reversed
      list = range(x, y+1); //list gets assigned to the function
      list.push(y+1); //push y to the list array, y has to add to catch up to x
      return list;//return the list
    }
  }
  //if x and y are equal return an empty array
  if(x===y){
    return [];
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //1. if exponent equals 0 then return 1, or exp reaches 0 return the exponent
  //2. if exp is a negative number, call the function with exponent incrementing divided by base
  //3. else exp is positive, call the function with the base times expoenet, exp decrements
  return exp === 0 ? 1 : exp < 0 ? exponent(base, exp+1)/base : base*exponent(base, exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //1. is n === 1, then it is a power of 2
  //2. else n is less than 1 i.e 0, return false
  //3. this is functin part, call the function and divded n by 2 continuously 
  return n === 1 ? true : (n < 1) ? false : powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  return string === "" ? "" :reverse(string.substr(1))+string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //this is the base case, if there is 1 or no characters left then string is a palindrome, return true
  if(string.length < 2){
    return true;
  }//this is an instance of ignoring spaces, if first character is a space
   //and last charactre is a space, ignore the spaces by slicing and returning new string
  if(string[0]===" "&&string[string.length-1]===" "){
    return palindrome(string.slice(1,string.length-1));
  }//another case of ignoring spaces, if first space is empty and last space is not
  //cut the first space and ignore the last, return string with first spot spliced
  if(string[0]===" "&&string[string.length-1]!==" "){
    return palindrome(string.slice(1));
  }//anotehr case of ignoring spaces
  //if the first space has a character and the last space has a space
  //ignore the first space and splice the string at the last space
  if(string[0]!==" "&&string[string.length-1]===" "){
    return palindrome(string.slice(0,string.length-1));
  }//in the case of characters, make them case insensitive
  //check to see if they're equal after
  //if the character equal return the funtion with the sliced string at the 
  //first character spot and the last character spot .e racecar -> aceca
  if(string[0].toLowerCase()===string[string.length-1].toLowerCase()){
    return palindrome(string.slice(1,string.length-1));
  }
  //if any condition fails then the string is NOT a palindrome
  else{
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  return y === 0 ? 0 : y < 0 ? -x + multiply(x, y + 1) : x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // This function compares a string, if they're equal return true, if no return false
  // if both strings have been reduced down to 0 in length then they're equal, return true
  // else if the first characater in both strings are equal, call the function by returning and slice them to their next spaces
  // if the chracters are not equal then the strings are inequal 
  return str1.length === 0 && str2.length === 0 ? true : str1[0]===str2[0] ? compareStr(str1.slice(1), str2.slice(1)) : false; 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //This function turns a str into an array of character made from that string
  //if the str.length equals 1 return the array of strings 
  // else str.length is greater than 1
  // concat the first index in the string to the return array and call the function with the str sliced at 1
  return str.length === 1 ? [str[0]] : [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //this returns an array except reversed
  //if the input array equals 0 return empty array, this will return the concatoned array
  //else if array.length is greater than 0 
  return array.length === 0 ? [] : [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //buildlist takes a value to make and array with a length arguement
  //if the legnth is equal to 0 return the finished array
  //if its not 0 concat thee value to the array and call the function with the length -1
  return length === 0 ? [] : [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //this counts the occurence of a value in a array
  //if the array length is 0 return the number that function a counter
  //if its not 0 is the value equal to first index in the array? if it is increment and return the function with the array sliced at 1
  // if its not equal return array at the first index and don't increment the number
  return array.length===0 ? 0 : array[0]===value ? 1 + countOccurrence(array.slice(1), value) : countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //this is a recursive map
  //if the input array is 0 return the array, else....
  //the array index of 0 is concatoned with the callback function mapping the index
  // with the function being called with the array sliced at index 1
  return array.length === 0 ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //this function returns the index number of a fib sequence
  //if the number is less than 0 return null
  if(n<0){
    return null;
  }
  //if the number equal to 1 return 1
  else if(n === 1){
    return 1;
  }//else return the function with n-1 added to the function n-2
  else{
    return nthFibo(n-1) + nthFibo(n-2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //this returns all the words capialized in an array
  //if the array is === to 0 return the input aray
  //else concatoned the first index to the array but capitalized
  //and call the function with the array sliced at 1
  return input.length === 0 ? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //this takes and array and capitalizes the first letter in each index of the array
  //if array length is equal to 0 return the array
  //else capitalize the first character at the first element and array the rest of word the word
  //that gets concatoned to the array and call the function with the array sliced at 1
  return array.length === 0 ? [] : [array[0].charAt(0).toUpperCase()+array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
//in this one we define the object in the arguement
var letterTally = function(str, obj={}) {
  //if the string is equal to 0 return the completed object
  if(str.length===0){
    return obj;
  }//if the index of string at 0 is already in the object
  if(str[0] in obj){
    obj[str[0]]++;//increment the counter in the object
    return letterTally(str.slice(1), obj);//return the function with the string sliced
  }
  else{//else if the tally doesn't exist for the element, set it to 1 
    obj[str[0]] = 1;//this creates the key in the object with the tally
    return letterTally(str.slice(1), obj);//return the function with the string sliced at 1
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if(list.length===0){  //once the list is equal to 0 BASE CASE
    return [];          //return the array
  }
  if(list[0]===list[1]){ //is the element at 0 and at 1 are equal
    return compress(list.slice(1)); //slice the array at the 1st element and call the fuctiion
  }
  if(list[0]!==list[1]){ //if the elements are not equal concatoned the first element to new array
    return [list[0]].concat(compress(list.slice(1))); // and call the function that will compare the next element
  }
  
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //BASE CASE, if the length of the array is 0
  if(array.length===0){
    return [];//return the array with the 0's minimized 
  }
  if(array[0]===0&&array[1]===0){//if the element at 0 and 1st index are 0's
    return minimizeZeroes(array.slice(1));//call the function and don't concatonate the first index
  }
  if(array[0]===0&&array[1]!==0){//if the number at first index is not a 0
    return [array[0]].concat(minimizeZeroes(array.slice(1)));//concatone that element to the new array and call the function with the array sliced at 1s
  }
  else{//this else will capture any other instance and just concatonate the first element and call the function
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //BASE CASE, input array is === to 0
  if(array.length===0){
    return [];//return the array with alternate signs
  }
  if(array[1]>0){//if the element at 1 is not negative
      array[1] = (-1 * array[1]);//set it to negative by multiplying it by -1
  }
  if(array[0]<0){//if the element at 0 is not positive
    array[0] = (-1 * array[0]);//set the element by multiplying it by negative 1 i.e -4 x -1 = 4
  }//finally return the function
  //concatonate both the first and second index so we evenly increment
  //return the function with the array sliced at 2
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //this is a word map that we call upon to exchange numbers for strings
  //if the number in string is equal to key we can concatonate the word in place of the number
  const wordMap = {
    0: 'zero',  
    1: 'one',   
    2: 'two',
    3: 'three', 
    4: 'four',  
    5: 'five',
    6: 'six',   
    7: 'seven', 
    8: 'eight',
    9: 'nine',
  };//if the string is equal to 0
  //return the base case of "" empty string
  //else is the first element equal to any key in the word map?
  //if true concatonate the word with + in place of the number and call the function with the rest of the string sent to a substring
  //if it's not equal add the string to the substring and call the function 
  return str.length===0 ? '' : wordMap[str[0]] ? wordMap[str[0]] + numToText(str.substring(1)) : str[0] + numToText(str.substring(1));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
