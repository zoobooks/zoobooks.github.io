//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //this takes an object and returns it's value into an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //this takes an object and returns the keys in a string with spaces in between
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //this takes an objects keys and send it to a string seperated by spaces
    let arr1 = objectValues(object);//use our object value function to send all values to an array
    let arr2 = [];   //create an empty array to store the result
    for(let i = 0; i < arr1.length; i++){ //we cycle through the first array to ensure all datatypes are strings
        if(typeof(arr1[i])==='string'){
            arr2.push(arr1[i]);        //if it is a string we push it to the new array
        }
    }
    return arr2.join(" ");          //return the new array joined as a string with a space inbetween each value
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //this checks if the input collection is an array or an object based upon the Array.isArray, if true it is in fact an array
    return Array.isArray(collection) ? "array" : "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //this captilizes a word by capitlizing the first index and concatonating the rest of the word that was sent to substring
    return string[0].toUpperCase() + string.substr(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
     //capitalize all words takes a string that is a sentence
    let wordArr = string.split(" ");            //break the sentence up into an array
    let result = [];                            //create empty array
    for(let i = 0; i < wordArr.length; i++){    //iterate through wordarray
        result.push(capitalizeWord(wordArr[i]));//use our capilizeword function and send the new word to the result array
    }
    return result.join(" ");                    //return the result array joined together as a string 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //welcome message takes an object and return a message concatonated with the object's name
    return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //this takes an objects name and species returns a message with both 
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //this searchs for a noises array in an object
    //if the object has a noises property and the length of it's not emptyu then return the noises as a string or say there are no noises
    return object.hasOwnProperty("noises") && object.noises.length > 0 ? object.noises.join(" ") : "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //this checks to see if a sentence has a given word based upon the 2 arguements
    let arr = string.split(" ");            //break the sentence upon into an array of words
    for(let i = 0; i < arr.length; i++){    //loop through the array
        if(arr[i]===word){                  //if any of the elements match the word, return true
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add friend adds a given name to a given objects friends array
    object.friends.push(name);//push the name to the friends array
    return object;          //return the object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//is friend takes a name and object and checks to see if the input name is friends in the objects
function isFriend(name, object) {
    //first use the hasWords and key to string to see if name has friends array
    //and see if the object.friend has the input name in the array, if both are equal to true then the function returns true, else false
    return hasWord(keysToString(object), "friends") === true && hasWord(valuesToString(object.friends), name) === true ? true : false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let arrayNames = array.map((i) => { return i.name;});
    let arrayNames2 = arrayNames.filter((i) => i !== name);
    let friendArr = [];

    for(let i = 0; i < array.length; i++){
      if(name.toLowerCase()===array[i].name.toLowerCase()){
        friendArr = array[i].friends;
      }
    }
    arrayNames.find(element => element === name);
    return arrayNames2.filter(element => friendArr.includes(element)===false);
}





 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //this returns a new array devoid of duplicate elements using the spread operator
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}