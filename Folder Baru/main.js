// ==========================================
// 1. VARIABEL DAN TIPE DATA
// ==========================================

// Deklarasi variabel
let nama = "Budi"; // String
let umur = 20; // Number
let isStudent = true; // Boolean
let alamat = null; // Null
let hobi; // Undefined

// Konstanta (tidak bisa diubah)
const PI = 3.14;

// Menampilkan ke console
console.log("Nama:", nama);
console.log("Umur:", umur);

// ==========================================
// 2. OPERATOR
// ==========================================

let a = 10;
let b = 5;

// Operator Aritmatika
console.log("Penjumlahan:", a + b); // 15
console.log("Pengurangan:", a - b); // 5
console.log("Perkalian:", a * b); // 50
console.log("Pembagian:", a / b); // 2

// Operator Perbandingan
console.log("a > b:", a > b); // true
console.log("a == b:", a == b); // false
console.log("a === '10':", a === "10"); // false (strict equality)

// ==========================================
// 3. STRING DAN TEMPLATE LITERAL
// ==========================================

let firstName = "John";
let lastName = "Doe";

// Concatenation tradisional
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template Literal (ES6)
let greeting = `Halo, nama saya ${firstName} ${lastName}`;
console.log(greeting);

// ==========================================
// 4. ARRAY
// ==========================================

// Membuat array
let buah = ["Apel", "Mangga", "Jeruk", "Pisang"];

// Mengakses elemen array
console.log(buah[0]); // Apel
console.log(buah.length); // 4

// Menambah elemen
buah.push("Anggur"); // Tambah di akhir
buah.unshift("Semangka"); // Tambah di awal

// Menghapus elemen
buah.pop(); // Hapus dari akhir
buah.shift(); // Hapus dari awal

// Looping melalui array
console.log("Daftar Buah:");
buah.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});

// ==========================================
// 5. OBJEK
// ==========================================

// Membuat objek
let person = {
  nama: "Alice",
  umur: 25,
  pekerjaan: "Developer",
  sapa: function () {
    return `Halo, saya ${this.nama}`;
  },
};

// Mengakses properti objek
console.log(person.nama); // Alice
console.log(person["umur"]); // 25
console.log(person.sapa()); // Halo, saya Alice

// ==========================================
// 6. FUNGSI
// ==========================================

// Fungsi dasar
function sapa(nama) {
  return `Halo, ${nama}!`;
}

console.log(sapa("World"));

// Arrow function (ES6)
const tambah = (x, y) => {
  return x + y;
};

console.log("5 + 3 =", tambah(5, 3));

// ==========================================
// 7. PERCABANGAN (IF-ELSE)
// ==========================================

let nilai = 85;

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B");
} else if (nilai >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// ==========================================
// 8. PERULANGAN (LOOP)
// ==========================================

// For loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// While loop
console.log("While Loop:");
let counter = 1;
while (counter <= 3) {
  console.log("Counter: " + counter);
  counter++;
}

// ==========================================
// 9. MANIPULASI DOM
// ==========================================

// Fungsi untuk mengubah teks
function ubahText() {
  document.getElementById("demo").innerHTML = "Teks telah diubah!";
  document.getElementById("demo").style.color = "red";
}

// Event listener
document.addEventListener("DOMContentLoaded", function () {
  console.log("Dokumen telah dimuat");
});

// ==========================================
// 10. CONTOH PROGRAM SEDERHANA
// ==========================================

// Kalkulator sederhana
function kalkulator(operasi, angka1, angka2) {
  switch (operasi) {
    case "tambah":
      return angka1 + angka2;
    case "kurang":
      return angka1 - angka2;
    case "kali":
      return angka1 * angka2;
    case "bagi":
      return angka1 / angka2;
    default:
      return "Operasi tidak valid";
  }
}

console.log("10 + 5 =", kalkulator("tambah", 10, 5));
console.log("10 * 3 =", kalkulator("kali", 10, 3));

// ==========================================
// 11. ERROR HANDLING
// ==========================================

try {
  // Kode yang mungkin error
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Pembagian dengan nol");
  }
  console.log("Hasil:", result);
} catch (error) {
  console.log("Terjadi error:", error.message);
} finally {
  console.log("Blok finally selalu dijalankan");
}
