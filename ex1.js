// EX 1.
// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male,
// "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// ● If the number is negative, return the related ancestor.
// ● If positive, return the related descendant.
// ● You are generation 0. In the case of 0 (male or female), return "me!".

const anc = {
  "-3": ["great grandfather", "great grandmother"],
  "-2": ["grandfather", "grandmother"],
  "-1": ["father", "mother"],
     0: ["me!", "me!"],
     1: ["son", "daughter"],
     2: ["grandson", "granddaughter"],
     3: ["great grandson", "great granddaughter"],
   
};
function generation(x, y) {
    return y == "m" ? anc[x][0] : anc[x][1];
  }
 

console.log(generation(-3, "f"));
console.log(generation(1, "f"));
console.log(generation(0, "f"));  