// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  let splits = str.split("");
  splits.pop("");
  splits.shift("");
  return splits.join("");
}

console.log(removeChar("eloquent")); // loquen

// using slice
// const removeChar = str => str.slice(1,-1)

// using substring
// const removeChar = str => str.substring(1, str.length-1);
