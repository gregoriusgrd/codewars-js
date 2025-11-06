// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1)); // 61000

/*
1 hour = 3600000 milliseconds
1 minutes = 60000 milliseconds
1 seconds = 1000 milliseconds
*/
