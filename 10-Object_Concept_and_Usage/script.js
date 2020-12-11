// const person = {
//     firstName: "Mert",
//     lastName: "Özen",
//     age: 25,
//     langs: ["English", "German"],
//     address: {
//         country: "Turkey",
//         city: "İstanbul"
//     },
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.fullName());
// console.log(person.langs[0]);

//------------------------------
// const person2 = [{ name: "Mert", surname: "Özen" }, { name: "Mehmet", surname: "Özen" }];

// console.log(person2[0].name);
// console.log(person2[1].name);

//-------------------------------

const person = {
    firstName: "Mert",
    lastName: "Özen",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

person.firstName = "Mehmet";

console.log(person.firstName);
console.log(person.fullName());