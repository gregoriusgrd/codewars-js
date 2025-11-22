/*
https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

You are given an odd-length array of integers, in which all of them are the same, 
except for one single number.

Complete the method which accepts such an array, 
and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    let majority = 0
    let a = numbers[0]
    let b = numbers[1]
    let c = numbers[2]
    if (a === b) {
        majority = a
    } else if (a === c) {
        majority = a
    } else {
        majority = b
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== majority) {
            return numbers[i]
        }
    }
}

console.log(stray([1, 1, 2]))

//alt 
/*
function stray(numbers) {
    var sort = numbers.sort();
        if (sort[0] === sort[1]) {
            return sort[sort.length-1]
        }  else {
            return sort[0]
    }
}
*/