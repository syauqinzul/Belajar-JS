const bigData = Array.from({length: 10000}, () => 
  Math.floor(Math.random() * 1000)
);

// ❌ Kode lambat
function processDataSlow(data) {
  let result = [];
  
  // 1. Filter angka genap
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result.push(data[i]);
    }
  }
  
  // 2. Kuadratkan setiap angka
  let squared = [];
  for (let i = 0; i < result.length; i++) {
    squared.push(result[i] * result[i]);
  }
  
  // 3. Hapus duplikat (cara lambat)
  let unique = [];
  for (let i = 0; i < squared.length; i++) {
    if (!unique.includes(squared[i])) {
      unique.push(squared[i]);
    }
  }
  
  // 4. Urutkan descending
  return unique.sort((a, b) => b - a);
}

// ✅ Versi optimasi
function processDataFast(data) {
  // Optimasi dengan single pass dan Set
  const uniqueSquares = new Set();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      const square = data[i] * data[i];
      uniqueSquares.add(square);
    }
  }
  
  // Konversi Set ke Array dan sort
  return Array.from(uniqueSquares).sort((a, b) => b - a);
  
  // PENJELASAN OPTIMASI:
  // 1. Single loop: filter, square, dan unique sekaligus
  // 2. Gunakan Set untuk unique values (O(1) lookup)
  // 3. Hindari multiple array allocations
  // 4. includes() adalah O(n), Set.has() adalah O(1)
}

// Versi dengan method chaining (lebih readable)
function processDataReadable(data) {
  return data
    .filter(n => n % 2 === 0)      // O(n)
    .map(n => n * n)               // O(n)
    .filter((n, i, arr) => arr.indexOf(n) === i) // O(n²) - masih lambat!
    .sort((a, b) => b - a);        // O(n log n)
}

// Versi dengan Set dan chaining (terbaik)
function processDataBest(data) {
  return [...new Set(
    data
      .filter(n => n % 2 === 0)
      .map(n => n * n)
  )].sort((a, b) => b - a);
  // PENJELASAN:
  // 1. filter + map: O(n)
  // 2. new Set(): O(n) untuk deduplikasi
  // 3. sort(): O(n log n)
  // Total: O(n log n)
}

// Benchmark
console.time('Slow Version');
processDataSlow(bigData.slice(0, 1000));
console.timeEnd('Slow Version');

console.time('Fast Version');
processDataFast(bigData.slice(0, 1000));
console.timeEnd('Fast Version');

console.time('Best Version');
processDataBest(bigData.slice(0, 1000));
console.timeEnd('Best Version');