/*
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.
*/

// function lovefunc(flower1, flower2){
//   if (flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0) {
//     return false
//   } else {
//     return true
//   }
// }


function lovefunc(flower1, flower2){
    return flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0 ? false : true
}

console.log(lovefunc(2, 2))

// alt

/*
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/