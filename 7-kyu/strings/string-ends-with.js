/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/

function solution(str, ending){
  return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'))

function endsWith(str) {
    return str[str.length - 1]
}

console.log(endsWith("abc"))