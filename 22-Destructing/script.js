//Diziler veya objeler içerisinden verilere kolayca alabilmek
//için kullandığımız kısa yoldur.

// let sayi1, sayi2;

// dizi = [50, 60, 80];
// sayi1 = dizi[0];
// sayi2 = dizi[1];
// console.log(sayi1, sayi2);

// let sayi1, sayi2;
// dizi = [50, 60, 80];

// [sayi1, sayi2] = dizi;

// console.log(sayi1, sayi2);

//Object Destructing
// const sayilar = {
//     s1: 10,
//     s2: 50,
//     s3: 80
// };

// // let sayi1 = sayilar.s1;
// // console.log(sayi1);

// const { s1, s2, s3 } = sayilar;
// console.log(s1, s2, s3);

// const { s1: sayi1, s2: sayi2, s3: sayi3 } = sayilar;
// console.log(sayi1, sayi2, sayi3);


//Function Destructing

// function getNumbers() {
//     return [2, 4, 6];
// }

// const [s1, s2, s3] = getNumbers();
// console.log(getNumbers());
// console.log(getNumbers()[0]);
// console.log(getNumbers()[1]);
// console.log(getNumbers()[2]);
// console.log(s1, s2, s3);


//Obje Örneği

const person = {
    name: "Mert",
    surname: "Özen",
    age: 25,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

const { name, surname, age } = person;
console.log(name, surname, age);

const { name: isim, surname: soyisim, age: yas } = person;
console.log(isim, soyisim, yas);