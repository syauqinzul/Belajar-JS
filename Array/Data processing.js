const sales = [
  { product: 'Laptop', price: 1200, quantity: 5, category: 'Electronics' },
  { product: 'Mouse', price: 25, quantity: 20, category: 'Electronics' },
  { product: 'Book', price: 15, quantity: 50, category: 'Education' },
  { product: 'Chair', price: 150, quantity: 10, category: 'Furniture' },
  { product: 'Phone', price: 800, quantity: 8, category: 'Electronics' },
  { product: 'Notebook', price: 5, quantity: 100, category: 'Education' }
];

// 1. Hitung total revenue
const totalRevenue = sales.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);
// PENJELASAN: reduce() mengakumulasi nilai
// Setiap iterasi: sum + (price * quantity)
// Initial value: 0

// 2. Dapatkan nama product dengan quantity > 15
const highQuantityProducts = sales
  .filter(item => item.quantity > 15)
  .map(item => item.product);
// PENJELASAN: filter() seleksi item, map() transform ke nama product
// Chain method: output filter jadi input map

// 3. Group sales by category
const salesByCategory = sales.reduce((groups, item) => {
  if (!groups[item.category]) {
    groups[item.category] = [];
  }
  groups[item.category].push(item);
  return groups;
}, {});
// PENJELASAN: reduce() untuk grouping
// Hasil: { Electronics: [...], Education: [...], Furniture: [...] }

// 4. Cari product dengan harga tertinggi
const mostExpensive = sales.reduce((max, item) => {
  return item.price > max.price ? item : max;
}, sales[0]);
// PENJELASAN: reduce() untuk cari maximum
// Bandingkan setiap item dengan current max

// 5. Urutkan sales berdasarkan revenue (descending)
const sortedByRevenue = [...sales].sort((a, b) => {
  const revenueA = a.price * a.quantity;
  const revenueB = b.price * b.quantity;
  return revenueB - revenueA; // Descending
});
// PENJELASAN: [...sales] buat copy agar tidak mutate original
// sort() dengan custom comparator
// revenueB - revenueA untuk descending

console.log('Total Revenue:', totalRevenue);
console.log('High Quantity Products:', highQuantityProducts);
console.log('Sales by Category:', salesByCategory);
console.log('Most Expensive:', mostExpensive);
console.log('Sorted by Revenue:', sortedByRevenue);