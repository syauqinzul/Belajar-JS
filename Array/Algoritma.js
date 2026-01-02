// 1. Remove Duplicates
function removeDuplicates(arr) {
  // Method 1: Menggunakan Set (paling efisien)
  return [...new Set(arr)];
  
  // Method 2: Menggunakan filter (untuk pemahaman)
  // return arr.filter((item, index) => arr.indexOf(item) === index);
  
  // Method 3: Menggunakan reduce
  // return arr.reduce((unique, item) => {
  //   return unique.includes(item) ? unique : [...unique, item];
  // }, []);
  
  // PENJELASAN: 
  // - Set hanya menyimpan nilai unik
  // - Spread operator [...] konversi Set ke array
  // - Time Complexity: O(n)
}

// 2. Find Missing Number
function findMissingNumber(arr, n) {
  // Method 1: Rumus matematika (paling efisien)
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
  
  // Method 2: Menggunakan XOR (alternative)
  // let xor1 = 0, xor2 = 0;
  // for (let i = 1; i <= n; i++) xor1 ^= i;
  // for (let i = 0; i < n-1; i++) xor2 ^= arr[i];
  // return xor1 ^ xor2;
  
  // PENJELASAN:
  // - Jumlah 1+2+...+n = n(n+1)/2
  // - Missing = Jumlah yang diharapkan - Jumlah aktual
  // - Time Complexity: O(n)
}

// 3. Rotate Array (Optimized)
function rotateArray(arr, k) {
  k = k % arr.length; // Handle k > arr.length
  if (k === 0) return arr;
  
  // Method 1: Reverse method (O(1) space)
  // reverse(arr, 0, arr.length - 1);
  // reverse(arr, 0, k - 1);
  // reverse(arr, k, arr.length - 1);
  // return arr;
  
  // Method 2: Menggunakan slice (lebih sederhana)
  const rotations = k % arr.length;
  return [...arr.slice(-rotations), ...arr.slice(0, arr.length - rotations)];
  
  // PENJELASAN:
  // - slice(-k) ambil k elemen terakhir
  // - slice(0, n-k) ambil elemen pertama hingga n-k
  // - Gabungkan dengan spread operator
}

// 4. Find Pair with Sum
function findPairWithSum(arr, target) {
  const numMap = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    
    numMap.set(arr[i], i);
  }
  
  return [];
  // PENJELASAN:
  // - Gunakan Map untuk menyimpan {value: index}
  // - Cek complement = target - current
  // - Jika complement ada di Map, return indices
  // - Time Complexity: O(n)
}

// TEST
console.log(removeDuplicates([1,2,2,3,4,4,5])); // [1,2,3,4,5]
console.log(findMissingNumber([1,2,4,5], 5));    // 3
console.log(rotateArray([1,2,3,4,5], 2));        // [4,5,1,2,3]
console.log(findPairWithSum([2,7,11,15], 9));    // [0,1]