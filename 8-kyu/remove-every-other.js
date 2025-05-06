// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/

function removeEveryOther(arr) {
  return arr.filter((value, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); // ["Keep", "Keep", "Keep"]
