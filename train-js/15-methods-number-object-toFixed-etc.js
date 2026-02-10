// https://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n){
  //coding here..
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i].toFixed(2))
    if (arr[i] < n) sum++
  }
  return sum
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24))

// filter (simpler)
/*
function howManySmaller(arr, n) {
    return arr.filter(num => Number(num.toFixed(2)) < n).length
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24))
*/