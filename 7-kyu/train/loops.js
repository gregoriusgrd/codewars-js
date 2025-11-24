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

function secondSmallest(arr) {
    let min = +Infinity
    let secondMin = +Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min
            min = arr[i]
        } else if (arr[i] < secondMin) {
            secondMin = arr[i]
        }
    }
    return secondMin
}

console.log(secondSmallest([8, 2, 5, 1, 9])) 

function sumArray (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([1, 2, 3, 4]))

function filterEven (arr) {
    return arr.filter(n => n % 2 === 0)
}

console.log(filterEven([1, 2, 3, 4, 5]))

function oddIndex (arr) {
    return arr.filter((value, index) => index % 2 !== 0)
}

console.log(oddIndex([10, 20, 30, 40, 50]))

function reverseArray(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}

console.log(reverseArray([1, 2, 3]))

function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(average([10, 20, 30]))

function countAbove10(arr) {
    return arr.filter(n => n > 10).length
}

console.log(countAbove10([4, 12, 15, 3, 10]))

// validation array
// if (numbers == null || numbers.length === 0) return []
// if (!Array.isArray(array) || array.length === 0) return 0;
// array == null nangkap kondisi undefined dan null