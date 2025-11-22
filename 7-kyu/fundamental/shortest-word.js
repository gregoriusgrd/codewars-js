/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    const splited = s.split(" ")
    let min = +Infinity
    for (const word of splited) {
        if (word.length < min) {
            min = word.length
        }
    }
    return min
}

console.log(findShort("Let's travel abroad shall we"))

//alt
/*
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/