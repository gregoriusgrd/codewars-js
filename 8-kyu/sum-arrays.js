// Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/*
Input: [1, 5.2, 4, 0, -1]
Output: 9.2
*/
