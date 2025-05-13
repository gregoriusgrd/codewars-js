// Sum of positive
// https://www.codewars.com/kata/515e271a311df0350d00000f

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, -4, 7, 12]));

/*
[1, -4, 7, 12] => 1 + 7 + 12 = 20
*/
