//String'e çevirme
// var name = "mert";
// console.log(typeof name);
// var age = 12;
// console.log(age);
// console.log(typeof age);
// age = String(age);
// console.log(age);
// console.log(typeof age);

// var age2 = 14;
// age2 = age2.toString();
// console.log(age2);
// console.log(typeof age2);

// console.log((12 + 8).toString());
// console.log((12 + 8) + "");

// let dizi = [1, 2, 3];
// console.log(dizi);
// dizi = dizi.toString();
// console.log(dizi);

//Numbers
// let sayi1 = 24;
// console.log(typeof sayi1);
// let sayi2 = "24";
// console.log(typeof sayi2);
// console.log(Number(sayi2));
// sayi2 = Number(sayi2);
// console.log(typeof sayi2);

// let sayi3 = "mert";
// console.log(Number(sayi3));
// sayi3 = Number(sayi3);
// console.log(typeof sayi3);

// console.log(Number(" "));
// console.log(Number(""));

// let sayi4 = "14";
// sayi4 = parseInt(sayi4);
// console.log(sayi4);
// sayi4 = "10 20 30";
// console.log(parseInt(sayi4));
// sayi4 = "a 10 20 30";
// console.log(parseInt(sayi4));

// let sayi5 = "11.2";
// console.log(parseInt(sayi5));
// console.log(parseFloat(sayi5));

//Booleans

// let sayi6 = 0;
// console.log(Boolean(sayi6));

// let sonuc = false;
// console.log(String(sonuc));
// console.log(Number(sonuc));

//Dates

// let tarih = new Date();
// console.log(String(tarih));
// console.log(Number(tarih)); //1 Ocak 1970 den itibaren geçen milisaniye değeridir.
// console.log(tarih.getTime());


//Otomatik Dönüşüm
var metin = "mert";
console.log(metin + 2);
console.log(2 + metin);
console.log(2 + 4 + metin);
console.log("5" * "2"); //önemli

//Date ve Array Tespit Etme

console.log(typeof Date());
var tarih = new Date();

console.log(typeof tarih);

console.log(tarih.constructor == Date);
if (tarih.constructor == Date) {
    console.log("Bu bir tarihtir");
}

var tarih = "2";

console.log(typeof tarih);

console.log(tarih.constructor == Date);
if (tarih.constructor == Date) {
    console.log("Bu bir tarihtir");
}