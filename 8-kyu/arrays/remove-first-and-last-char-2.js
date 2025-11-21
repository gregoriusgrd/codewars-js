/*
https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/

function array(string) {
  if (string.length === 0 || string == null) return null
  const splited = string.split(',').map(s => s.trim());
  if (splited.length <= 2) return null
  const removeFirst = splited.shift()
  const removeLast = splited.pop()
  return splited.join(' ')
}

console.log(array("A1, B2, B3"))

// slice
/*
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}
*/