/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animal object
var animal = {};
//using dot notation assign the animals species
animal.species = "human";
//using bracket notation give the animal a name
animal["name"] = "jacobi";
//create a noises key that is assign to an empty array;
animal.noises = [];
//print animal to console with a console logS
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

noises = []; //<------can't actually declare new variable!!! its declared in the check at the bottom of the page!!
//using bracket notation give noises its first element, a sound your animal might make
noises[0] = "*painful scream*";
//using an array function add another sound
noises.push("I will use my credit card!");
//add another element to the array, but to the front
noises.unshift("*dopamine induced unintelliable murmur*");
//using bracket notation add an element to the end and make sure it works regardless of the amount of elements
noises[noises.length] = "I want a crunch wrap supreme.";
//console.log length of noises
console.log(noises.length);
//dynamically console.log last element of array
console.log(noises[noises.length-1]);
//console.log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using bracket syntax assign noises array to the noises key in animal
animal["noises"] = noises;
//push another element to the noises array with any syntax
animal["noises"].push("z Z z Z z...");
//console.log animal object
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named animals and that will be an empty arrray
animals = []; // again can't declare the new variable, already declared at the bottom!!!
//push the first animal onto the array
animals.push(animal);
//console.log animals
console.log(animals);
//create a variable duck and assign  it provided data
let duck = {
    species: "duck",
    name: "Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//now push the duck to the array
animals.push(duck);
//console log animals
console.log(animals);

//now create 2 more animals with specific names, species, and 2 noises each

let frog = {
    species: "frog",
    name: "Ted",
    noises: ['ribbit!', 'slurp']
};

let mule = {
    species: "mule",
    name: "Hobart",
    noises: ["eyyyhooahh!!", "clomp"]
};
// add both animals to array
animals.push(frog, mule);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a data structure for a LIST of friends.. array
//because an array is a list 
friends = [];//<---//i chose this because an array is a list 

//create a function return random index of our animals array 
getRandom = arr => arr[Math.floor(Math.random()*(arr.length-1))];
//now use the index randomizer to push a random animals name to the friends array
friends.push(getRandom(animals).name);
//console log friends
console.log(friends);
//using bracket notation add friends array to as a property "friends" to one of the animals in the animals array
getRandom(animals)["friends"] = friends;//i randomized the animal who gets the friends array


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}