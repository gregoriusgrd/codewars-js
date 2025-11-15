/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    let text = ''
    if (num == null || num === 0 ) return ""
    for (let i = 1; i <= num; i++) {
        text += `${i} sheep...`
    }
    return text
}

const test = 3
console.log(countSheep(test))

/*
  const n = `${num} sheep...`
  return String(n).repeat(num)
*/

function greet(name){
    return name === "Johnny" ? 'Hello, my love!' : `Hello, ${name}!`
}