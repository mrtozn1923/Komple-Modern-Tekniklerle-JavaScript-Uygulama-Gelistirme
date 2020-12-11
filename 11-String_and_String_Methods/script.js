// //tercih edilmelidir
// let firstName = "mert";
// console.log(typeof firstName);

// //tercih edilmemeli
// let lastName = new String("özen");
// console.log(typeof lastName);

// //kaçış(escape) karakteri
// let text = "\"";
// console.log(text);
// let text2 = '"';
// console.log(text2);

// //iki JS objesi karşılaştırılırken her zaman false döner.
// let A = new String("TR"); //bu bir objedir
// let B = new String("TR"); //bu bir objedir
// console.log(A == B);
// console.log(A === B);

//String Metodları
//property ve function normalde ilkel veri tiplerinde kullanılmaz ancak JS ilk veri tiplerine obje gibi davranır.

//Lenght:Uzunluk
// var txt = "Mert  Özen";
// console.log(typeof txt);
// console.log(txt.length);

//indexOf, lastIndexOf: Aranacak değeri bulma
// var txt = "Türkiye Cumhuriyeti";
// var txt2 = "Türkiye Cumhuriyeti Cumhuriyeti";
// console.log(txt.indexOf("Cum"));
// console.log(txt.indexOf("Cum", 15));
// console.log(txt.indexOf("cum"));
// console.log(txt2.lastIndexOf("Cum"));

//search: Aranacak değeri bulma (regex kullanılabilir)
// var txt = "Türkiye Cumhuriyeti";
// console.log(txt.search("Cum"));
// console.log(txt.search("cum"));
// console.log(txt.search(/cum/i));

//slice, substring, substr
// var txt = "Türkiye Cumhuriyeti";
// console.log(txt.slice(8));
// console.log(txt);
// console.log(txt.slice(8, 13));
// console.log(txt.slice(-8));
// console.log(txt.slice(-8, -5));
// console.log(txt.substring(1, 9));
// console.log(txt.substr(8, 3));

//replace : değiştirmek
// var txt = "Mert Özen Mert";
// console.log(txt.replace("Mert", "Mehmet"));
// console.log(txt); //orijinal metin değişmez
// console.log(txt.replace("mert", "Mehmet"));
// console.log(txt.replace(/mert/i, "Mehmet"));
// console.log(txt.replace(/Mert/g, "Mehmet"));

//büyük harf ve küçük harf
// var txt = "Mert Özen";
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());

//string birleştirme
// var txt = "Mert Özen";
// var txt2 = "Mehmet Özen";
// var txt3 = txt.concat("-", txt2);
// console.log(txt3);

//boşlukları temizle
// var str = "    TR    TR   ";
// console.log(str);
// console.log(str.trim());

//string ifade içindeki karakterleri ayıklamak
// var str = "Merhaba Dünya";
// console.log(str.charAt());
// console.log(str.charAt(0));
// console.log(str.charAt(2));
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(0) + 2);
// console.log(str[5]);
// str[5] = "A"; //bu kod işlemez
// console.log(str);


//string ifadeyi diziye çevirme
var txt = "a,b,c,d,e";
console.log(txt.split(","));
var arr = txt.split(",");
console.log(arr[0]);
arr[0] = "d";
console.log(arr[0]);