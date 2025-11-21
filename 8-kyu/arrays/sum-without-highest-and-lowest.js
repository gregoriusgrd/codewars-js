/*
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {
    if (array == null || array.length === 0) return 0

    const min = Math.min(...array)
    const indexMin = array.indexOf(min)
    const filterMin = array.filter((_, index) => index != indexMin)

    const max = Math.max(...filterMin)
    const indexOfMax = filterMin.indexOf(max)
    const filterMax = filterMin.filter((_, index) => index != indexOfMax)

    let sum = 0
    for (let i = 0; i < filterMax.length; i++) {
        sum += filterMax[i]
    }
    return sum
}

console.log(sumArray([undefined]))

// remove min and max by index so not deleting duplicate
/*
    // validation
    if (array == null || array.length === 0) return 0

    // remove min 
    const min = Math.min(...array)
    const indexMin = array.indexOf(min)
    const filterMin = array.filter((_, index) => index != indexMin)

    // remove max
    const indexOfMax = array.indexOf(Math.max(...array))
    const filterMax = array.filter((_, index) => index != indexOfMax)
    return filterMax
*/

//alt

/*
function sumArray(array) {
  array = array || [];
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
*/