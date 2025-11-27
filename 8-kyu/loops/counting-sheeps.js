// Counting sheep..
// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript'

function countSheeps(sheep) {
  // TODO
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}

// The correct answer would be 17.

// shorter ver using arr.filter
/*
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
*/
