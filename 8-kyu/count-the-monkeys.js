// Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
