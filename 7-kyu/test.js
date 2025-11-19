function findSmallest(arr) {
    let min = +Infinity
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(findSmallest([3, 5, 1, 9]))

function findLargest(arr) {
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findLargest([7, 2, 9, 1]))

function secondLargest(arr) {
    let max = -Infinity
    let secondMax = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max
            max = arr[i]
        } else if (arr[i] > secondMax) {
            secondLargest = arr[i]
        }
    }
    return secondMax
}

console.log(secondLargest([10, 20, 30, 40]))