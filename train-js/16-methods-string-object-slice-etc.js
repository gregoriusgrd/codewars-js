// https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr){
  //coding here...
    let length = arr.map(word => word.length)
    let min = Math.min(...length)
    let slice = arr.map(word => word.slice(0, min))
    return slice
}

console.log(cutIt(["codewars","javascript","java"]))