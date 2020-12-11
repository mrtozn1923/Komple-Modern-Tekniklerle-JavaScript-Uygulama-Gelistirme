//String Fonksiyonları ile RegExp:search, replace, match

// let str = "TR Mert Özen Mert";
// console.log(str.search("Mert"));
// console.log(str.search("mert")); //-1 ifade bulunamadı

// console.log(str.search(/mert/i));

// console.log(str.replace("Mert", "Mehmet"));
// console.log(str);
// console.log(str.replace("mert", "Mehmet"));
// console.log(str);
// console.log(str.replace(/mert/ig, "Mehmet"));
// console.log(str);

// console.log(str.match(/erta/g));
// console.log(str.match(/ert/g));
// console.log(str.match(/Ert/gi));

//-----------------------------------------
//Regular Expression Object Functions
//test()->boolean exec()->array

// let str = "Türkiye Cumhuriyeti";
// let pattern = /ü/;
// console.log(pattern.test(str));
// console.log(/ü/.test(str));
// console.log(pattern.exec(str));

//----------------------------------------
// let str = "Mert Özen";
// let number = "123456789";
// let pattern = /[er]/g;
// console.log(str.match(pattern));
// console.log(number.match(/[2-6]/g));
// console.log(/[2-6]/.test(number));
// console.log(/[a|e]/.test(str));

//------------------------------------------
// let str = "Tebrikler 100 puan aldınız.";
// let pattern = /\d/g;
// let pattern2 = /100/g;
// console.log(str.match(pattern));
// console.log(str.match(pattern2));
//-------------------------------------------
// let str = "Mert Özeeen Türkiyee";
// let pattern = /e+/g;
// let pattern2 = /e*/g;
// let pattern3 = /e?/g;
// console.log(str.match(pattern));
// console.log(str.match(pattern2));
// console.log(str.match(pattern3));
//----------------------------------------------
let str = "Mert Özeeen Türkiyee";
let pattern = /e+/g;
let pattern2 = /e+/;
console.log(pattern.global);
console.log(pattern2.global);