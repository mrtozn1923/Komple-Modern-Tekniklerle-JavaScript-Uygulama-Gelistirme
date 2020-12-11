// var tarih = new Date();
// console.log(tarih);
// console.log(typeof tarih);

// //aylar:0 dan başlar
// //günler:0 dan başlıyor. Pazar:0
// var tarih2 = new Date(2019, 11);
// console.log(tarih2);
// var tarih3 = new Date(2019, 11, 13, 5, 30, 12, 0);
// console.log(tarih3);


//Tarih Getirme

//Bir gün 86400000 ms

// var tarih = new Date(0);
// console.log(tarih);
// var tarih2 = new Date(86400000);
// console.log(tarih2);

// var tarih = new Date();
// console.log(tarih.getFullYear());
// console.log(tarih.getMonth());

// const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

// console.log(aylar[tarih.getMonth()]);
// console.log(tarih.getMonth() + 1);

//Tarih Ayarlama
// var tarih = new Date();
// console.log(tarih);
// tarih.setDate(11);
// console.log(tarih);
// tarih.setFullYear(2021);
// console.log(tarih);

//String Tarih Çevirme
var tarih = Date.parse("November 10,2020");
console.log(tarih); //ms cinsinden
var tarih2 = new Date(tarih);
console.log(tarih2);
console.log(tarih2.getMonth() + 1);
console.log(typeof tarih2);