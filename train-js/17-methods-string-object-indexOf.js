// https://www.codewars.com/kata/57277a31e5e51450a4000010

/*
indexOf → cari teks dari kiri
lastIndexOf → cari teks dari kanan
search → cari teks pakai regex
*/

/*
1. Kalau tidak ditemukan → return -1
2. Kalau cuma satu → return 0
3. Kalau lebih dari satu → return selisih
*/

function firstToLast(str,c){
  //coding here..
    let first = str.indexOf(c)
    let last = str.lastIndexOf(c)
    if (first === -1) return -1
    if (first === last) return 0
    return last - first
}

console.log(firstToLast("ababc", "d"))

/*

  return last - first
*/