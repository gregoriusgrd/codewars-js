/*
https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

TODO: Refactor and shorten the function

function describeAge(age) {
  if (age <= 12) {
    return "You're a(n) kid";
  } else if (age >= 13 && age <= 17) {
    return "You're a(n) teenager";
  } else if (age >= 18 && age <= 64) {
    return "You're a(n) adult";
  } else {
    return "You're a(n) elderly";
  }
}
*/

function describeAge(age) {
  return `You're a(n) ${age > 64 ? `elderly` : age > 17 ? `adult` : age > 12 ? `teenager` : `kid`}`
}

console.log(describeAge(9))

// note
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
conditional chain

function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
*/

/*
function describeAge(age) {
  s = "You're a(n) "
  return age > 64 ? `${s}elderly`
    : age > 17 ? `${s}adult`
    : age > 12 ? `${s}teenager`
    : `${s}kid`
}

Your solution has a length of 161 chars but the max is 137. It should be 24 chars shorter. Keep trying :)
*/