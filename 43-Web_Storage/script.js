//Web Storage=Local Storage+Session Storage
//Local Storage: Silinmediği sürece kalır
//Session Storage: Sekme veya tarayıcı kapatıldığında silinir.

// localStorage.setItem("key","value");
// console.log(localStorage.getItem("key"));
// localStorage.removeItem("key");

// sessionStorage.setItem("key","value");
// console.log(sessionStorage.getItem("key"));
// sessionStorage.removeItem("key");

// localStorage.setItem("score",60);
// console.log(localStorage.getItem("score"));
// console.log(typeof localStorage.getItem("score"));
// console.log(Number(localStorage.getItem("score")));
// console.log(typeof Number(localStorage.getItem("score")));

// let colors=["red","green","blue"];
// localStorage.setItem("colors",colors);
// console.log(localStorage.getItem("colors"));

// let colors=["red","green","blue"];
// localStorage.setItem("colors",JSON.stringify(colors));
// console.log(JSON.parse(localStorage.getItem("colors")));

// let person={name:"mert",lastName:"özen"};
// localStorage.setItem("person",JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("person")));
// // localStorage.removeItem("person");
// localStorage.clear();

// if(typeof (Storage) !=="undefined"){
//     //localStorage ve sessionStorage işleler yapılabilir.
// }else{
//     alert("Tarayıcınız Web Storage API desteklemiyor");
// }

let person={name:"mert",lastName:"özen"};
let person2={name:"mehmet",lastName:"özen"};
localStorage.setItem("person",JSON.stringify(person));
localStorage.setItem("person2",JSON.stringify(person2));
console.log(localStorage.key(0));
console.log(localStorage.key(1));

let localStorageLength=localStorage.length;
console.log(localStorage.key(localStorageLength-1));
