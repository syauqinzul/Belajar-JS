// execution context, hoisting, & scope

// execution context
console.log("Execution Context");
function a() {
  console.log("Inside function a");
  function b() {
    console.log("Inside function b");
  }
  b();
}

a();

// hoisting
console.log("\nHoisting Example");
console.log(x);
var x = 5;
console.log(x);

// console.log(y); // Uncommenting this line will cause a ReferenceError
let y = 10;
console.log(y);

// scope
console.log("\nScope Example");
function outerFunction() {
  let outerVar = "I'm outside!";
  function innerFunction() {
    let innerVar = "I'm inside!";
    console.log(outerVar);
    console.log(innerVar);
  }
  innerFunction();
  // console.log(innerVar); // Uncommenting this line will cause a ReferenceError
}

outerFunction();

// global scope

let globalVar = "I'm global!";

function checkGlobal() {
  console.log(globalVar);
}

checkGlobal();

// block scope

console.log("\nBlock Scope Example");
{
  let blockVar = "I'm block scoped!";
  console.log(blockVar);
}

// console.log(blockVar); // Uncommenting this line will cause a ReferenceError

// function scope
console.log("\nFunction Scope Example");
function functionScopeExample() {
  var functionVar = "I'm function scoped!";
  console.log(functionVar);
}

functionScopeExample();
// console.log(functionVar); // Uncommenting this line will cause a ReferenceError

// Compare this snippet from Object/Prototype.js:
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Halo ${this.nama}, selamat makan!`);
// };
// mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   console.log(`Halo ${this.nama}, selamat bermain!`);
// };
// mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   console.log(`Halo ${this.nama}, selamat tidur!`);
// };
// let syauqi = new mahasiswa("Syauqi", 10);
// let palji = new mahasiswa("Palji", 20);

//execution phase

console.log(sayHello());

var nama = "Syauqi";
var umur = 19;

function sayHello() {
  return `Halo nama saya ${nama}, umur saya ${umur} tahun.`;
}

// hoisting phase
// var nama;
// var umur;
// function sayHello() {
//   return `Halo nama saya ${nama}, umur saya ${umur} tahun.`;
// }

var nama;
("Syauqi Nuzul Abdi");
var username;
("@syauqinzul_");

function cetakURL(username) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL("syauqi_nuzul"));

// function cetakURL(username) {
//   var instagramURL; 'http://instagram.com/'
//   return instagramURL + username;
// }

// lexical scope
function init() {
  var nama = "Syauqi"; // local variable di dalam function init
  function tampilNama() {
    console.log(nama); // akses variable nama dari parent function
  }

  tampilNama();
}

init();

// function init() {

//   var nama; 'Syauqi' // local variable di dalam function init
//   function tampilNama() {
//     console.log(nama); // akses variable nama dari parent function
//   }

//   tampilNama();
// }

// function dalam function
function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }

    c();
  }

  b();
}

a();
