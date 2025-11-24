function hasNumber(str) {
    return /\d/.test(str)
}

console.log(hasNumber("abc1"))

function removeSpaces(str) {
    return str.replace(/ /g, "")
}

console.log(removeSpaces("a b  c"))

function capitals(str) {
    return str.match(/[A-Z]/g)
}

console.log(capitals("HeLLo"))

function startsWithCapital(str) {
    return /^[A-Z]/.test(str)
}

console.log(startsWithCapital("Hello"))

function maskNumbers(str) {
    return str.replace(/\d/g, "#")
}

console.log(maskNumbers("a1b2c3"))

// 6

function removeCapitals(str) {
    return str.replace(/[A-Z]/g, "")
}

console.log(removeCapitals("HeLLo"))

// 7

function countLowercase(str) {
    return str.match(/[A-Z]/g).length
}

console.log(countLowercase("aBcDeF"))

// 8

function onlyLetters(str) {
    return str.replace(/[^a-z]/gi, "")
}

console.log(onlyLetters("ab123!#cd"))

// 9 

function endsWithDigit(str) {
    return /\d$/.test(str)
}

console.log(endsWithDigit("abc9"))

// 10

function capitalWords(str) {
    return str.match(/\b[A-Z][a-zA-Z]*\b/g)
}

console.log(capitalWords("Hello world From CodeWars"))