/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let count = 0
  for (const vowel of str) {
    const matches = vowel.match(/[aiueo]/gi) || []
    count += matches.length
  }
  return count;
}

console.log(getCount('abracadabra'))

/*
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length
}
*/