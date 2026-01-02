const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// 1. Tambah 'grape' di akhir
fruits.push('grape'); 
// push() menambah elemen di akhir array
// fruits sekarang: ['apple', 'banana', 'orange', 'mango', 'kiwi', 'grape']

// 2. Hapus buah pertama
fruits.shift();
// shift() menghapus elemen pertama
// fruits sekarang: ['banana', 'orange', 'mango', 'kiwi', 'grape']

// 3. Tambah 'watermelon' di awal
fruits.unshift('watermelon');
// unshift() menambah elemen di awal array
// fruits sekarang: ['watermelon', 'banana', 'orange', 'mango', 'kiwi', 'grape']

// 4. Hapus buah terakhir
fruits.pop();
// pop() menghapus elemen terakhir
// fruits sekarang: ['watermelon', 'banana', 'orange', 'mango', 'kiwi']

// 5. Ganti 'orange' dengan 'strawberry'
const orangeIndex = fruits.indexOf('orange');
if (orangeIndex !== -1) {
    fruits[orangeIndex] = 'strawberry';
}
// indexOf() mencari posisi elemen, jika tidak ditemukan return -1
// fruits sekarang: ['watermelon', 'banana', 'strawberry', 'mango', 'kiwi']

// 6. Hasil akhir: ['watermelon', 'banana', 'strawberry', 'mango']
fruits.pop(); // Hapus 'kiwi'
// Atau bisa gunakan: fruits.splice(4, 1) untuk hapus index 4

console.log(fruits); // ['watermelon', 'banana', 'strawberry', 'mango']