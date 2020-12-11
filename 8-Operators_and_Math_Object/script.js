//Aritmetik Operatörler
// var sayi1 = 2;
// var sayi2 = 4;
// var toplam = sayi1 + sayi2;
// console.log(toplam);
// console.log((sayi1 + sayi2) * (sayi1++));
// console.log(sayi1);
// console.log((sayi1 + sayi2) * (++sayi1));
// console.log(sayi1);

//Atama Operatörleri
// let sayi1 = 5;
// let sayi2 = 6;
// sayi1 = sayi1 * sayi2;
// sayi1 *= sayi2;

//String Operatörü
// let name = "mert";
// let surname = "özen";
// let fullName = name + " " + surname;
// console.log(fullName);
// console.log(37 + " " + "Kastamonu");
// console.log(2 + 4 + "toplam");
// console.log("toplam:" + 2 + 4);
// console.log("toplam:" + (2 + 4));

//Karşılaştırma Operatörleri
let sonuc1 = 25;
let sonuc2 = 24;
let sonuc3 = 24;
let sonuc4 = "24";
console.log(sonuc1 > sonuc2);
console.log(sonuc1 >= sonuc2);
console.log(sonuc2 == sonuc3);
console.log(sonuc3 == sonuc4);
console.log(sonuc3 === sonuc4);
console.log(sonuc3 != sonuc4);
console.log(sonuc3 !== sonuc4);
//Mantıksal Operatörler
console.log(sonuc1 > sonuc2 && sonuc2 == sonuc3);
console.log(sonuc1 > sonuc2 && sonuc2 != sonuc3);
console.log(sonuc1 > sonuc2 || sonuc2 != sonuc3);
let sonuc = false;
console.log(!(sonuc1 > sonuc2));
console.log(!sonuc);

//MATH Objesi
console.log(Math.PI); //sabit PI değeri
console.log(Math.round(5.5)); //yuvarlama
console.log(Math.pow(2, 3)); //üs alma
console.log(2 ** 3); //üs alma operatörü
console.log(Math.sqrt(16)); //karekök
console.log(Math.abs(-16)); //mutlak değer
console.log(Math.ceil(5.4)); //yukarı yuvarlar
console.log(Math.floor(5.6)); //aşağı yuvarlar
console.log(Math.max(2, 3, 5, 19, 22));
console.log(Math.min(2, 3, 5, 19, 22));
console.log(Math.round(Math.random() * 100));