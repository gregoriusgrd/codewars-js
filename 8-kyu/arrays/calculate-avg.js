/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((acc, num) => acc + num, 0) / array.length
}

const test = [1, 2, 3]
console.log(findAverage(test))