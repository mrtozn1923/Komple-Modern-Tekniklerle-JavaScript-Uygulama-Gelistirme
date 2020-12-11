//Primitive Type

var age1 = 25;
var age2 = 24;
console.log("age1:" + age1, "age2:" + age2);
age1 = age2;
console.log("age1:" + age1, "age2:" + age2);
age2 = 26;
console.log("age1:" + age1, "age2:" + age2);


//Reference Type

var person1 = { firstName: "Mert", lastName: "Özen" };
var person2 = null;
console.log(person1, person2);
person2 = person1; //aynı adresi gösterirler
console.log(person1, person2);
person1.firstName = "Mehmet";
console.log(person1, person2);