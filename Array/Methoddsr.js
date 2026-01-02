// Implementasi push manual
function myPush(arr, element) {
  arr[arr.length] = element; // Tambah di posisi terakhir
  return arr; // Return array yang sudah dimodifikasi
  // PENJELASAN: arr.length selalu 1 lebih besar dari index terakhir
  // arr[arr.length] adalah slot kosong setelah elemen terakhir
}

// Implementasi pop manual
function myPop(arr) {
  if (arr.length === 0) return undefined;
  
  const lastElement = arr[arr.length - 1]; // Simpan elemen terakhir
  arr.length = arr.length - 1; // Kurangi panjang array
  return lastElement; // Return elemen yang dihapus
  // PENJELASAN: Mengurangi length array secara otomatis
  // menghapus elemen terakhir di JavaScript
}

// Implementasi indexOf manual
function myIndexOf(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i; // Return index jika ditemukan
    }
  }
  return -1; // Return -1 jika tidak ditemukan
  // PENJELASAN: Linear search - cek setiap elemen dari awal
}

// TEST
let testArr = [1, 2, 3];
console.log(myPush(testArr, 4)); // [1, 2, 3, 4]
console.log(myPop(testArr));     // 4
console.log(myIndexOf([1,2,3], 2)); // 1