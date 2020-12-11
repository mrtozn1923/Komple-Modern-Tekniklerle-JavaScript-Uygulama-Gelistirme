// let obje = { name: "mert", surname: "özen" };
// console.log(obje.name);
// console.log(obje["name"]);
// console.log(obje[0]); //objelerde kullanılmaz

//-------------------------------------------
// let dizi = ["mert", "özen"];
// console.log(dizi[0]);

// let sayilar = [
//     10,
//     20,
//     30
// ];
// console.log(sayilar[0]);
// console.log(sayilar.length);
// console.log(sayilar[sayilar.length]);
// console.log(sayilar[sayilar.length - 1]);

// sayilar[0] = 20;
// console.log(sayilar);
// console.log(sayilar.toString());

// let person = ["mert", 25];
// console.log(person);
// console.log(person[0]);
// console.log(person[1]);

// let point1 = new Array(); //tavsiye edilmez
// let point2 = []; //kullanabilirsiniz

// console.log(typeof point1);
// console.log(typeof point2);

// console.log(point2.constructor === Array);
// console.log(Array.isArray(point1));

// let fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits.toString());
// console.log(fruits.join("-"));

//Diziye Eleman Ekleme
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.push("orange");
// console.log(colors);

//Diziden Eleman Silme
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.pop("orange");
// console.log(colors);

//Dizinin Başından Eleman Silme
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.unshift("orange");
// console.log(colors);

//Dizinin Başından Eleman Silme
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.shift();
// console.log(colors);

//Belirli bir noktaya eleman ekleme ve silme
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.splice(1, 0, "orange", "purple");
// console.log(colors);

// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.splice(1, 1, "orange", "purple");
// console.log(colors);

// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.splice(1, 2);
// console.log(colors);

//Dizi Birleştirme
// let colors1 = ["red", "green"];
// let colors2 = ["orange", "purple"];
// console.log(colors1.concat(colors2));
// console.log(colors1);
// console.log(colors2);

//Bir dizinin elemanlarından yeni bir dizi oluşturma
// var colors = ["red", "green", "orange", "purple"];
// var colors2 = colors.slice(1);
// console.log(colors2);
// console.log(colors);
// var colors2 = colors.slice(1, 3);
// console.log(colors2);

//Dizilerde Sıralama
// var colors = ["red", "green", "orange", "purple"];
// console.log(colors.sort());
// var numbers = [40, 100, 1, 5, 25, 10];
// console.log(numbers.sort());

// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);

// numbers.sort(function(a, b) {
//     return b - a;
// });

// console.log(numbers);

// console.log("En küçük eleman:" + numbers[numbers.length - 1]);
// console.log("En büyük eleman:" + numbers[0]);

//Math Sınıfı En Küçük ve En Büyük Değer Bulma
// var numbers = [40, 100, 1, 5, 25, 10];

// console.log("En küçük eleman:" + Math.min.apply(null, numbers));
// console.log("En büyük eleman:" + Math.max.apply(null, numbers));