
//   Create a function that gets the name of the piece of jewelry with the highest pr
//   ice and returns "The most expensive one is the {name of jewelry piece}".

mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }) //➞ "The most expensive one is the Pearl Necklace"
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }) //➞ "The most expensive one is the Diamond Ring"

  function mostExpensive(obj) {
    let Max = -Infinity;
    let k;
    for (x in obj) {
        if (obj[x] > Max) {
            Max = obj[x]
            // k = x;
        }
    }
    console.log(`The most expensive one is the ${x}`);
}
 