// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r,g,b){
  //coding here
  const toHex = (n) => n.toString(16).padStart(2, "0")
  return '#' + toHex(r) + toHex(g) + toHex(b)
}

console.log(colorOf(234, 111, 0))

// padStart method

let text = "5";
let padded = text.padStart(2,"0");
console.log(padded)

/*
function colorOf(r,g,b){
  return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
}
*/