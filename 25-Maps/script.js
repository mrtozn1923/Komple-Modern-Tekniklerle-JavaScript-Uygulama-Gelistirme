// const person = {
//     name: "mert",
//     surname: "özen"
// }
// console.log(person.name);
// console.log(person.surname);

// let person = new Map();

// const k1 = "name";
// const k2 = { n1: 20, n2: 30 };
// const k3 = () => 10;

// //Set
// person.set(k1, "Bu bir string değer");
// person.set(k2, "Bu bir objedir");
// person.set(k3, "Bu bir fonksiyondur");

// //Get
// console.log(person.get(k1));
// console.log(person.get(k2));
// console.log(person.get(k3));

// console.log(person);
// console.log(person.size);

// const cities = new Map();
// cities.set(37, "Kastamonu");
// cities.set(34, "İstanbul");
// cities.set(06, "Ankara");

//for each
// cities.forEach(function(value, key) {
//     console.log(key, value);
// });

//for of
// for (let value of cities) {
//     console.log(value);
//     // console.log(value[0]);
//     // console.log(value[1]);
// }

// for (let [key, value] of cities) {
//     // console.log(key, value);
//     console.log(key);
//     // console.log(value);
// }

// for (let key of cities.keys()) {
//     console.log(key);
// }
// for (let value of cities.values()) {
//     console.log(value);
// }

//Array->Map

// const cities = [
//     [37, "Kastamonu"],
//     [34, "İstanbul"]
// ];
// const cityMap = new Map(cities);
// console.log(cityMap);
// console.log(cityMap.size);

//Map->Array
const cities = new Map();

cities.set(34, "İstanbul");
cities.set(37, "Kastamonu");

const cityArray = Array.from(cities);
console.log(cityArray);
console.log(cityArray[0]);
console.log(cityArray[0][0]);
console.log(cityArray[0][1]);
console.log(cityArray[1][0]);
console.log(cityArray[1][1]);

cityArray.forEach(function(value) {
    console.log(value[0], value[1]);
});

cityArray.forEach(function(value) {
    value[0] = value[0] + 1;
});

cityArray.forEach(function(value) {
    console.log(value[0], value[1]);
});