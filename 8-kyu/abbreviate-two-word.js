/*
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name){
    const split = name.split(" ")
    return `${split[0].charAt(0).toUpperCase()}.${split[1].charAt(0).toUpperCase()}`
}

const test = "patrick feeney"
console.log(abbrevName(test))

// flow logic
/*
const test = "Sam Harris"
const split = test.split(" ")
const firstInitial = split[0].charAt(0)
const secondInitial = split[1].charAt(0)
const result = `${firstInitial.toUpperCase()}.${secondInitial.toUpperCase()}`
console.log(split)
console.log(firstInitial)
console.log(secondInitial)
console.log(result)
*/

//alt
/*
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
*/