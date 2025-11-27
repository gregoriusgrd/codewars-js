function basicOp(operation, value1, value2){
  //Code
  switch (operation) {
    case '+':
        return value1 + value2
    case '-':
        return value1 - value2
    case '*':
        return value1 * value2
    case '/':
        return value1 / value2
    default:
        return "invalid operator"
  }
}

const test = ('+', 4, 7)
console.log(basicOp(test))
console.log(basicOp('+', 4, 7))