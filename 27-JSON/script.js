// //json obje
// {
//     "firstName": "Mert",
//     "lastName": "Özen"
// }
// //json array
// {
//     "employess": [
//         { "firstName": "Mert", "lastName": "Özen" },
//         { "firstName": "Mehmet", "lastName": "Özen" },
//         { "firstName": "Mesut", "lastName": "Özen" }
//     ]
// }


//obje->json obje
var person = { name: "mert", surname: "özen" };
var personJSON = JSON.stringify(person);
console.log(person);
console.log(personJSON);
console.log(personJSON.name); //hatalı
console.log(personJSON.surname); //hatalı

//json obje->obje
var person2 = JSON.parse(personJSON);
console.log(person2);
console.log(person2.name);
console.log(person2.surname);

var txtJSON = `{
    "employess": [
        { "firstName": "Mert", "lastName": "Özen" },
        { "firstName": "Mehmet", "lastName": "Özen" },
        { "firstName": "Mesut", "lastName": "Özen" }
    ]
}`;

console.log(txtJSON);

var employe = JSON.parse(txtJSON);
console.log(employe);

var txtJSON2 = `
{
        "firstName": "Mert",
        "lastName": "Özen"
    }`;

console.log(txtJSON2);

var p = JSON.parse(txtJSON2);
console.log(p.firstName);
console.log(p.lastName);