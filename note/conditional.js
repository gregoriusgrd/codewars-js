/*
🧩 1. if, else if, dan else

🧠 Kapan digunakan:

Ketika logika kondisinya bertingkat atau kompleks.
Saat butuh pemeriksaan rentang nilai (misalnya nilai ujian, usia, harga, dll).
Ketika tiap kondisi berbeda bentuknya (tidak cuma 1 variabel yang dibandingkan).
*/

const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("D");
}

/*
🎚️ 2. Ternary Operator (? :)

📘 Struktur umum:
condition ? valueIfTrue : valueIfFalse;

🧠 Kapan digunakan:

Jika cuma ada dua kemungkinan sederhana.
Ideal untuk inline expression (misalnya di return statement React atau variable assignment).

💡 Hindari untuk kondisi panjang (lebih dari 2 cabang), karena bikin kode susah dibaca.
*/

const age = 18;
const message = age >= 18 ? "Boleh masuk" : "Belum cukup umur";
console.log(message);

/*
⚙️ 3. Switch–Case

📘 Struktur umum:

switch (variable) {
  case value1:
    // lakukan sesuatu
    break;
  case value2:
    // lakukan sesuatu
    break;
  default:
    // jika tidak cocok dengan semua case
}
*/

const day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Mulai kerja lagi 😩");
    break;
  case "Tuesday":
    console.log("Masih awal minggu 😐");
    break;
  case "Friday":
    console.log("Hampir weekend 😎");
    break;
  default:
    console.log("Hari biasa aja 😅");
}

