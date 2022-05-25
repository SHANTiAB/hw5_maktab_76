
// 3.Lowercase and Uppercase Map
// Write a function that creates an object with each
// (key, value) pair being the (lower case, upper case) versions of a letter, respectively
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

function upperCase(arrays){
    let newObj = {};
    for (let letter of arrays){
        newObj[letter] = letter.toUpperCase();
    }
    console.log(newObj);
}
upperCase(["p", "s"]);
upperCase(["a", "b", "c"]);
upperCase(["a", "v", "y", "z"])



 


 
// var key, keys = Object.keys(obj);
// var n = keys.length;
// var newobj={}
// while (mapping) {
//   key = keys[n];
//   newobj[key.toLowerCase()] = obj[key];
// }
 