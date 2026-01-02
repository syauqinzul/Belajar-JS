// Bisa menyimpan berbagai tipe data dalam satu array
let mixed = [
  42, // number
  "hello", // string
  true, // boolean
  { name: "John" }, // object
  [1, 2, 3], // array
  function () {
    return "hi";
  }, // function
  null, // null
  undefined, // undefined
];

// Ini berbeda dengan array di bahasa typed seperti Java:
// Java: int[] arr = new int[5]; // HANYA integer
// JavaScript: var arr = [1, "hello", true]; // BERBAGAI tipe

// 1. Pre-allocate array jika ukuran diketahui
let size = 1000000;

// ❌ Buruk: Push berulang
let badArray = [];
for (let i = 0; i < size; i++) {
  badArray.push(i); // Reallocation berkali-kali
}

// ✅ Baik: Pre-allocate
let goodArray = new Array(size);
for (let i = 0; i < size; i++) {
  goodArray[i] = i; // No reallocation
}

// 2. Hindari sparse arrays
// ❌ Buruk
let sparse = [];
sparse[1000000] = 1; // Memory wasted

// ✅ Baik
let dense = new Array(1000001).fill(0);
dense[1000000] = 1;

// 3. Gunakan Typed Arrays untuk numerik
// ❌ Regular array
let regular = [1, 2, 3, 4, 5];

// ✅ Typed array (lebih cepat, memory efisien)
let typed = new Float64Array([1, 2, 3, 4, 5]);

// 4. Pilih method yang tepat
let bigArray = new Array(1000000).fill().map((_, i) => i);

// Benchmark:
console.time("forEach");
let sum1 = 0;
bigArray.forEach((n) => (sum1 += n));
console.timeEnd("forEach");

console.time("forLoop");
let sum2 = 0;
for (let i = 0; i < bigArray.length; i++) {
  sum2 += bigArray[i];
}
console.timeEnd("forLoop"); // Biasanya lebih cepat
