/*
https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

return a value:
"unknown value" (JS, PHP, Python)

Example:
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
refer to the description for what you should return in this case

# Specifically for dynamically-typed languages:

arguments: 1, "k", "*"
should return "unknown value"
*/

function calculator(a, b, sign) {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "unknown value";
  }
}

console.log(calculator(1, "k", "+"));
