// let data = new Set();

// data.add("mert");
// data.add(25);
// data.add(25); //eklenmez
// data.add(5.25);
// data.add(true);
// data.add(25); //eklenmez
// data.add([2, 5, 8]);
// data.add({ n1: 25, n2: 35 });

// console.log(data);

// let obj = { n1: 25, n2: 24 };

// const data = new Set([100, "Mert", obj, "Mert", { n1: 25, n2: 24 }]);
// console.log(data);

// //eleman silme
// // data.delete(100);
// // data.delete("Mert");
// data.delete({ n1: 25, n2: 24 });
// data.delete(obj);
// console.log(data);

let obj = { n1: 25, n2: 24 };
const data = new Set([100, "Mert", obj, "Mert", { n1: 25, n2: 24 },
    [1, 8, 12]
]);

//Has Metodu
// console.log(data.has(100));
// console.log(data.has("Mert"));
// console.log(data.has({ n1: 25, n2: 24 }));
// console.log(data.has(obj));
// console.log(data.has([1, 8, 12]));

// data.forEach(function(element) {
//     console.log(element);
// });

// data.forEach(element => console.log(element));
// data.forEach(element => console.log(element[0]));

// for (let value of data) {
//     console.log(value);
// }

//Set->Array
let arr = Array.from(data);
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
arr.forEach(element => console.log(element));

//Array->Set
// const kume = new Set([2, 5, 5, 12, 85]);
let dizi = [2, 5, 5, 12, 85];
let kume = new Set(dizi);
console.log(kume);
dizi = Array.from(kume);
console.log(dizi);

dizi.forEach(element => console.log(element));