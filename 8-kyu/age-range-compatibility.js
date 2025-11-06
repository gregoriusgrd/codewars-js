// Age Range Compatibility Equation
// https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age) {
  let min = 0;
  let max = 0;
  if (age > 14) {
    min = Math.floor(age / 2 + 7);
    max = Math.floor(2 * (age - 7));
  } else if (age <= 14) {
    min = Math.floor(age - 0.1 * age);
    max = Math.floor(age + 0.1 * age);
  }
  return `${min}-${max}`;
}

// using nested function
/*
function datingRange(age){
  return `${min(age)}-${max(age)}`;
  
  function min(age) {
    return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
  }
  
  function max(age) {
    return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  }
}
*/
