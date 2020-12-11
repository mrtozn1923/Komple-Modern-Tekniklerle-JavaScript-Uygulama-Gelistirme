//Parametresiz Fonksiyon
// function message() {
//     console.log("Merhaba");
// }
// message();

// var point = 0;
// function message(name, surname) {
//     var point = 50;
//     console.log(`Merhaba ${name} ${surname} ${point} puan aldınız`);
// }
// console.log(point);
// message("mert", "özen");


//Varsayılan parametreli fonksiyon
// function message(name = "", surname = "") {
//     var point = 50;
//     console.log(`Merhaba ${name} ${surname} ${point} puan aldınız`);
// }

// message();


// var point = 0;

// function message(name, surname) {
//     if (typeof name !== "undefined" && typeof surname !== "undefined") {
//         var point = 50;
//         console.log(`Merhaba ${name} ${surname} ${point} puan aldınız`);
//     }
// }
// console.log(point);
// message();


//Geri değer döndüren fonksiyon
// function dorduncuKuvvet(x) {
//     //kodlar
//     return (x * x * x * x);
// }

// toplam = 25;
// toplam += dorduncuKuvvet(3);
// console.log(toplam);

// function toplam(y, z) {
//     // console.log(`Toplam: ${y + z}`);
//     return `Toplam: ${y + z}`;
// }

// function dorduncuKuvvet(x) {
//     //kodlar
//     return (x * x * x * x);
//return altında kod çalışmaz
// }

// console.log(toplam(dorduncuKuvvet(3), 25));

//Function Expression
// const message = function(name) {
//     console.log("Merhaba" + " " + name);
// };

// message("Mert");

// const person = {
//     name: "mert",
//     surname: "özen",
//     fullName: function() {
//         return this.name + " " + this.surname;
//     }
// }

// console.log(person.fullName());

//Immediately Invoked Function Expression (IIFE)
// (function(name) {
//     console.log("Merhaba " + name);
// })("Mert");

//Anonim Fonksiyonlar
// var dizi = [
//     function() {
//         console.log("Birinci Fonksiyon");
//     },
//     function() {
//         console.log("İkinci Fonksiyon");
//     },
//     function() {
//         console.log("Üçüncü Fonksiyon");
//     }
// ];

// dizi[0]();