function squareSum(numbers){
    const map = numbers.map((n) => n * n)
    let sum = 0
    for (let i = 0; i < map.length; i++) {
        sum += map[i]
    }
    return sum
}

const test = [1,2]
console.log(squareSum(test))


/*
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
*/