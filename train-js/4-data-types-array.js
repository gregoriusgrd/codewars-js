// https://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr){
  //return length of arr
  return arr.length
}

console.log(getLength([1, 2, 3]))

function getFirst(arr){
  //return the first element of arr
  return arr[0]
}

console.log(getFirst([1, 2, 3]))

function getLast(arr){
  //return the last element of arr
  let last = arr[arr.length-1]
  return last
}

console.log(getLast([1, 2, 3]))

function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}

console.log(pushElement([1, 2, 3]))

function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

console.log(popElement([1 , 2, 3]))
