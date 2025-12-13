var tanya = true;
while(tanya){
    // menangkap pilihan player
    var p = prompt('Pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }   
    var hasil = '';

    // menentukan rules
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'gajah' ) {
        // jika player memilih gajah
        if( comp == 'orang' ) {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        } 
    } else if( p == 'orang' ) {
        // jika player memilih orang
        if( comp == 'gajah' ) {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        } 
    } else if( p == 'semut' ) {
        // jika player memilih semut
        if( comp == 'orang' ) {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        } 
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    } 
    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya adalah Kamu ' + hasil);  
    tanya = confirm('Main lagi?');
}
