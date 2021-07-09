// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-zoobooks');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//malecount takes an array and filters the array by peoples gender, and returns an array of manles that uses .length at the end
var maleCount = array => _.filter(array, person => person.gender === "male").length;

//female count takes an array and uses reduces to count each instance that a person has the gender "female"
var femaleCount = array => _.reduce(array, (count, person) => count + (person.gender === "female"), 0);

var oldestCustomer = function(array){                   // oldest customer takes an array
    let highestAge = 0;                                 // set the highest age equal to 0 as number to compare ages withs, 
    return _.reduce(array, (acc, person) => {           // we find the olds with reduce, accumulator keeps compares peoples ages
        if(person.age > highestAge){                    // if person's age is higher than initial value or the current highest
            highestAge = person.age;                    // set the highest age to the current person's age
            return person.name;                         // this returns the oldest customers name to oldest person
        }
        return acc;                                     // if current person isn't oldest, return accumulator
    },'');                                              // since we're returning a string set the initial value to empty string
};

var youngestCustomer = function(array){                 // youngest customer takes an array
    let lowestAge = Infinity;                           // set the youngest age equal to infinity, this ensures the accumulator sets a younger age
    return  _.reduce(array, (acc, cur) => {             // youngest person will returned when reduce is done reducing
        if(cur.age < lowestAge){                        // callback, if current age is lower than the current lowest, set it
            lowestAge = cur.age;                        // lowest age is now the current person 
            return cur.name;                            // this will return the name, and continue reducing until the end
        }
        return acc;                                     // if the last person was older than the most current young, return accumulator and keep looping
    },'');
};

var averageBalance = function(array){
    let numArr = []; //initialize and array to store converted strings from numbers
    let balSum = 0;  //increment for number of balances worked on in dataset
    
    //This function removes the dollar sign and comma from a string if the balance is in the thousands, its will also do it for hundreds
    let removeDollarcomma = str => str.length===9 ? str.charAt(1) + str.substring(3,str.length) : str.substring(1,str.length);
    
    //this calls a converter function for each element and pushes it to an array as number, increments amount of balances too
    let convertToNum = array =>_.each(array, function(person){numArr.push(parseFloat((removeDollarcomma(person.balance))));balSum++;});
    
    convertToNum(array); //call the converter function on the array to create new array
    
    //return the new array with all numbers added together divided by the amount of accounts
    return (_.reduce(numArr, (x, y) => x + y))/balSum;
};

//firstLetterCount takes an array and character and counts using reduce for each account of a person's first character in their name
//matching, the reduce function increments and eventually returns the final number, initial value is "0" because a number is being returned
var firstLetterCount = (array, char) => _.reduce(array, (count, person) => count + (person.name.charAt(0)===char.toUpperCase()), 0);

var friendFirstLetterCount = function(array, name, char){           // takes an array, name, and character
    for(let i = 0; i < array.length; i++){                          // lets loop through the array ** NO CONSTRAINTS ON THIS ONE :) **
        if(array[i].name===name){                                   // if the name in the array matches our name arguement
            return firstLetterCount(array[i].friends, char);        // call the first letter count function for each friend in the friend list and the car
        }
    }
};

var friendsCount = function(array, name){
    let friends = [];
    _.each(array, function(person){
        if(_.contains(_.pluck(person.friends, name), name)===true){
            friends.push(person.name);
        }
    });
    return friends;
};

var topThreeTags = function(array){
    let tags = _.pluck(array, tags);
    return tags;
    
};

//genderCount returns an object that shows all the genders in the dataset (the array)
var genderCount = function(array){          
    //first we have to find every occurence of non-binary folks using reduce, reduce counts occurences and sends the number to a variable
    let nbCount = array => _.reduce(array, (count, person) => count + (person.gender === "non-binary"), 0);
    
    return {                                    // return the object
        female: femaleCount(array),             // call female count function
        male: maleCount(array),                 // call male count function
        'non-binary': nbCount(array)            // set non binary count to the nbCount variable
    };
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
