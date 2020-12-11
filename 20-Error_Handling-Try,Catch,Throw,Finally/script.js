// try {
//     //kodlar
// } catch (error) {
//     //hata oluştuğunda düşeceği yer
// } finally {
//     //her zaman çalışır
// }

// var txt = "mert";
// console.log(txt.toUpperCase());

// try {
//     var txt = 1;
//     console.log(txt.toUpperCase());
// } catch (error) {
//     if (error.name == "TypeError") {
//         console.log("Uygun tipte veri girilmedi");
//     }
// }

// var sayi = 25;
// var kare = sayi * sayi;
// console.log(kare);

// var sayi = "2";
// var kare = sayi * sayi;
// console.log(kare);

// try {
//     var sayi = "a";
//     if (isNaN(sayi)) throw "bu bir sayı değildir"
//     var kare = sayi * sayi;
//     console.log(kare);
// } catch (error) {
//     console.log(error);
// }

//Kütüphane Kodları
function kupAl(x) {
    if (isNaN(x)) throw "bu bir sayı değildir";
    return x * x * x;
    // if (isNaN(x)) {
    //     console.log("bu bir sayı değildir");
    // }
    // return x * x * x;
}

//Kullanıcı Kodları

try {
    console.log(kupAl("a"));
} catch (error) {
    alert("Sayısal bir değer girin.");
}