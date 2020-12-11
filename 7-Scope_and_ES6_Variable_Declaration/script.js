// console.log(a);
// var a = 2;
//Üstte yazılanlar ile alttakileri karıştırmayın

//----------------------------------------------------

// a = 5;
// console.log(a);
// var a;
// console.log(a);

//NOT: "use strict" ifadesi ile tanımlanmamış değişken kullanımı engellenebilir.
//"use strict" kullanmazsanız değişken adını yanlış yazdığınızda tekrar tanımlanacaktır.

// "use strict"
// var age = 2;
// agee = 5;
// console.log(age);

//------------------------------------------------------

//Scope(Kapsam):değişkenlerin erişilebilirliğini belirler.
//Local Scope(Function Scope) / Global Scope / Block Scope(ES6)

// var a = 2;

// function name() {
//     var a = 3;
//     a = 5;
//     console.log(a);
// }
// name();
// console.log(a);

//Block Scope
// {
//     var c = 2;
//     console.log(c);
// }
// console.log(c);

//NOT:Global değişkenler Window Nesnesine dahildir ve heryerden erişilebilir.

//---------var/let/const----primitive-----------
// var sayi = 3;
// var sayi = 4;
// console.log(sayi);
// let sayi2 = 5;
// console.log(sayi2);
// const PI = 3.14;

//---------var/let/const----reference-----------
// const color = ["red", "green", "blue"];
// const color = ["red", "green", "blue"]; //hatalı
// color.push("orange");


/*NOT:Bir JS değişkenin ömrü belirtildiği yerde başlar. Fonksiyon tamamlandığında yerel değişkenler silinir. Tarayıcı penceresini veya sekmeyi kapattığınızda global değişkenler silinir. */

// function name() {
//     let ad = "mert";
//     console.log(ad);
// }
// name();
// let ad = "mehmet";
// console.log(ad);

// Block Scope
// {
//     let c = 2;
//     console.log(c);
// }
// console.log(c);
// var i = 5;
// for (let i = 0; i < 10; i++) {

// }
// console.log(i);