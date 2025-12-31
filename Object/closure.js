// //closure
// function init() {
//   // let nama = 'Syauqi';
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// let panggilNama = init();
// panggilNama('Nopal');
// panggilNama('Rahul');



function ucapkansalam(waktu) {
  return function(nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}

let selamatPagi = ucapkanSalam('pagi')
let selamatSiang = ucapkanSalam('siang')
let selamatMalam = ucapkanSalam('malam')

console.dir(selamatMalam('Syauqi'));g