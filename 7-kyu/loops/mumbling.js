function accum(s) {
	// your code
  return s.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-')
}

const test = "abcd"
console.log(accum(test))

function acc(s) {
    let result = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i] // ambil huruf tunggal
        const first = char.toUpperCase() // huruf pertama kapital
        const rest = char.toLowerCase().repeat(i); // huruf kecil diulang sebanyak index

        result.push(first + rest)
    }

    return result.join('-')
}

console.log(acc('abcd'))