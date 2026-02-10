// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr){
  let odd = [], even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i])
    } else {
      even.push(arr[i])
    }
  }
  
  return [odd,even];
}

console.log(pickIt([1, 2, 3]))

// simpler
/*
function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}
*/