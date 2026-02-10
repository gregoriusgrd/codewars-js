// https://www.codewars.com/kata/5722b3f0bd5583cf44001000

// in object

function giveMeFive(obj){
  //coding here
  let arr = []
  for (var key in obj) {
    if (key.length === 5) arr.push(key)
    if (obj[key].length === 5) arr.push(obj[key])
  }
  return arr
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))

// old
/*
function giveMeFive(obj){
  //coding here
  let arr = []
  for (var key in obj) {
    console.log(key)
    console.log(obj[key])

    if (key.length === 5) arr.push(key)
    if (obj[key].length === 5) arr.push(obj[key])
  }
  return arr
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))
*/