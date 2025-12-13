const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.addEventListener('click', function() {  
    // document.body.style.background('biru-muda');
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

const tombolRandomWarna = document.getElementById('tombolRandomWarna');
tombolRandomWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}); 

const sMerah = document.querySelector('.sMerah');
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;    
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',100,100)';
});

const sHijau = document.querySelector('.sHijau');
sHijau.addEventListener('input', function() {
    const g = sHijau.value;
    const r = sMerah.value;    
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(100,' + g + ',100)';
});
const sBiru = document.querySelector('.sBiru');
sBiru.addEventListener('input', function() {
    const b = sBiru.value;  
    const r = sMerah.value;  
    const g = sHijau.value;  
    document.body.style.backgroundColor = 'rgb(100,100,' + b + ')';
});

//posisi mouse

//ukuran browser
// document.body.addEventListener('mousemove', function(event) {
//     //mendapatkan ukuran browser
//     const lebarBrowser = window.innerWidth;
//     const tinggiBrowser = window.innerHeight;

//     //mendapatkan posisi mouse
//     const posisiX = Math.round((event.clientX / lebarBrowser) * 255);
//     const posisiY = Math.round((event.clientY / tinggiBrowser) * 255);
//     document.body.style.backgroundColor = 'rgb(' + posisiX + ',' + posisiY + ',100)';
// });



// cara pertama menggunakan event 'input'

// const sMerah = document.getElementById('sMerah');
// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;    
//     document.body.style.backgroundColor = 'rgb(' + r + ',0,0)';
// });

// const sHijau = document.getElementById('sHijau');
// sHijau.addEventListener('input', function() {
//     const g = sHijau.value;    
//     document.body.style.backgroundColor = 'rgb(0,' + g + ',0)';
// });
// const sBiru = document.getElementById('sBiru');
// sBiru.addEventListener('input', function() {
//     const b = sBiru.value;    
//     document.body.style.backgroundColor = 'rgb(0,0,' + b + ')';
// });  


// const sMerah = document.getElementById('sMerah');
// const sHijau = document.getElementById('sHijau');
// const sBiru = document.getElementById('sBiru');
// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });
// sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;    
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });  



// cara lain menggunakan event 'change'
// sMerah.addEventListener('change', ubahWarna);
// sHijau.addEventListener('change', ubahWarna);
// sBiru.addEventListener('change', ubahWarna);
// function ubahWarna() {
//     const r = sMerah.value;
//     const g = sHijau.value;    
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// }
// cara lain menggunakan event 'mousemove'
// sMerah.addEventListener('mousemove', ubahWarna);
// sHijau.addEventListener('mousemove', ubahWarna);
// sBiru.addEventListener('mousemove', ubahWarna);
// function ubahWarna() {
//     const r = sMerah.value;
//     const g = sHijau.value;    
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// }
// cara lain menggunakan event 'input'
// sMerah.addEventListener('input', ubahWarna);
// sHijau.addEventListener('input', ubahWarna);
// sBiru.addEventListener('input', ubahWarna);
// function ubahWarna() {
//     const r = sMerah.value;  
//     const g = sHijau.value;
//     const b = sBiru.value;    
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// }  

