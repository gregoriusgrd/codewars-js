/*
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    if (str == null || str.length === 0) return true
    let countX = (str.match(/[x]/gi) || []).length
    let countO = (str.match(/[o]/gi) || []).length
    return countX === countO
}

console.log(XO("x"))

//alt
/*
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/