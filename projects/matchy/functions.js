/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function that will look for an animal by name, parameters are an array and a string
function search(arr, name){
    //use .find() to look for an animal by name and return it or return null if there is no such animal
    return arr.find(obj => obj.name === name) || null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes 3 parameters, animals, name, replacement
function replace(animals, name, replacement){
    //if our search function is not null we splice the replacement in
    if(search(animals, name)!==null){
        //splice index where the search is with the replacement arguement
        return animals.splice([search(animals, name)], 0, replacement);
    }
    //do nothing if not found
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function with 2 paraamenters animals and name that will delete if found in array
function remove(animals, name){
    //if the search finds the animal and its not null
    if(search(animals, name)!==null){
        //delete that animal from the array
        return animals.splice([search(animals, name)]);
    }
    //do nothing if not found
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//create a function add that takes 2 paramenters, animals (array) and animal (object)
function add(animals, animal){
    //we need to validate data before we push the animal to the array so we create a test function
                    // animal name and length are greater than 0 and we can't find another animal with the same name return true 
                                // if these three conditions all pass as true the function returns true otherwise false
    let test = () => animal.name.length > 0 && animal.species.length > 0 && !(animals.find(obj => obj.name === animal.name)) ? true : false;

    //if the test function is true then push the animal arguement into the array
    if(test()===true){
        return animals.push(animal); 
    }
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
