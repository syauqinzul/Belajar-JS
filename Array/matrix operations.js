const matrixA = [[1,2,3],[4,5,6],[7,8,9]];
const matrixB = [[9,8,7],[6,5,4],[3,2,1]];

// 1. Matrix Addition
function addMatrices(a, b) {
  // Validasi ukuran matrix sama
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error('Matrices must have same dimensions');
  }
  
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
  // PENJELASAN: a[i][j] + b[i][j] untuk semua i,j
  // Hasil: [[10,10,10],[10,10,10],[10,10,10]]
}

// 2. Transpose Matrix
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
  // PENJELASAN: Tukar baris dan kolom
  // matrix[i][j] → result[j][i]
}

// 3. Matrix Multiplication
function multiplyMatrices(a, b) {
  const aRows = a.length;
  const aCols = a[0].length;
  const bRows = b.length;
  const bCols = b[0].length;
  
  if (aCols !== bRows) {
    throw new Error('Columns of A must equal rows of B');
  }
  
  const result = new Array(aRows);
  for (let i = 0; i < aRows; i++) {
    result[i] = new Array(bCols).fill(0);
  }
  
  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      for (let k = 0; k < aCols; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
  // PENJELASAN: Dot product row i dari A dengan column j dari B
  // Rumus: C[i][j] = Σ A[i][k] * B[k][j]
}

// TEST
console.log('Addition:', addMatrices(matrixA, matrixB));
console.log('Transpose:', transpose(matrixA));
console.log('Multiplication:', multiplyMatrices(matrixA, matrixB));