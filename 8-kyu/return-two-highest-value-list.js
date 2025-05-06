// Return Two Highest Values in List
// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/

function twoHighest(arr) {
  let sorting = arr.sort((a, b) => b - a);
  let distinct = [...new Set(sorting)];

  if (arr.length === 0) {
    return [];
  } else if (distinct.length < 2) {
    return [distinct[0]];
  } else {
    return [distinct[0], distinct[1]];
  }
}

console.log(twoHighest([15, 20, 20, 17])); // [20, 17])
console.log(twoHighest([15])); // [15])

// better solution using slice
/*
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}
  */
