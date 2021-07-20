// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {               //this takes an array of nested arrays and flattens them into a single array
  return [].concat.apply([], arr);    //return flattened array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {            //create a function like a loop that takes value, test, update, body arguements
  if (test(value)){                                   //if the test on the value returns true
    body(value);                                      //call the body function on the current value
    return loop(update(value), test, update, body);   //then recursively call the loop function again with an updated value
  }                                                   //if the test, tests false the function will stop looping
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {             //this function tests every element of an array, it takes an array and test function
  for(let i = 0; i < arr.length; i++){  //loop through the length of the array
    if(test(arr[i])!==true){            //if any of the tests on the array elements equal false
      return false;                     //return false
    }                     
  }
  return true;                          //if the loop completes without any falses, it will return true by default
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  
  //The three functions below were included in "Helpers .js"
  function countBy(items, groupName) {        
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({
          name,
          count: 1
        });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function characterScript(code) {
    for (let script of SCRIPTS) {  //had to alter this so the SCRIPTS were able to be accessd globally
      if (script.ranges.some(([from, to]) => {
          return code >= from && code < to;
        })) {
          console.log(script);
        return script;
      }
    }
    return null;
  }
  
  
  function textScripts(text) {
    //this counts each character in the text and determine what most of the text is composed of language wise
    let scripts = countBy(text, char => {let script = characterScript(char.codePointAt(0));
    //this returns direction instead of the name now and filters it if there is not a name
      return script ? script.direction : "none";}).filter(({name}) => name != "none");
    
    //this reduce function returns the dominant direction
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  //this calls the textScripts direction function
  return textScripts((text));
}




// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
