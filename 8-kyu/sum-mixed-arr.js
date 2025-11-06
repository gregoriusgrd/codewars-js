/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

(sumMix([9, 3, '7', '3']), 22)
*/

function sumMix(x){
    const toNum = x.map((arr) => Number(arr))
    const sum = toNum.reduce((sum, num) => sum + num, 0)
    return sum
}

const test = [9, 3, '7', '3']
console.log(sumMix(test))

/*
// jumlahin semua kuadrat
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/