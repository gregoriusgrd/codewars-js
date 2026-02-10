// https://www.codewars.com/kata/57216d4bcdd71175d6000560

// while: if the condition is false the code inside while loop is never executed
// do...while: always run once and start checking condition after that

function padIt(str,n){
  //coding here
  let i = 1
  while (i <= n){
    if (i % 2 === 0) {
      str = str + "*" 
    } else {
      str = "*" + str
    }
    i++
  }
  return str
}

console.log(padIt("a", 4))

// simpler
/*
function padIt(str,n){
  while(n > 0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}
*/