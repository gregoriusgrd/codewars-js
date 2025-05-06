// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b/

function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
  }

  let avg = total / classPoints.length;
  let result = avg < yourPoints ? true : false;
  return result;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true

// better solution using reduce
/*
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/
