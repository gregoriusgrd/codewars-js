function highAndLow(numbers){
  const toArr = numbers.split(" ")
  const max = Math.max(...toArr)
  const min = Math.min(...toArr)
  return `${max} ${min}`
}

console.log(highAndLow("2 4 6 7"))

// alt
/*
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
*/