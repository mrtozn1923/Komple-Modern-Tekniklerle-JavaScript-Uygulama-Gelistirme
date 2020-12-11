//Object Literal
// const person1={
//     name:"mert",
//     surname:"özen"
// }

// const person2={
//     name:"mehmet",
//     surname:"özen",
//     fullName:function(){
//         console.log(this);
//     }
// }
// person2.fullName();
//Function Declaration
// console.log(this);
// function f1(){
//     console.log(this);
// }
// f1();

//Constructor Function
// function Person(name,surname){
//     const person={};
//     person.name=name;
//     person.surname=surname;
//     person.fullName=function(){
//         console.log(this);
//         console.log(person.name);
//         console.log(this.name);
//         console.log(person.surname);
//         console.log(this.surname);
//     }
//     return person;
// }

// function Person(name,surname){
//     this.name=name;
//     this.surname=surname;
//     this.fullName=function(){
//         console.log(this);
//         console.log(this.name);
//         console.log(this.surname);
//     }
// }

// const person=new Person("mert","özen");
// console.log(person);
// console.log(person.fullName());

// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.fullName = function() {
//         console.log(this);
//         console.log(this.name);
//         console.log(this.surname);
//     }
// }

// Person("Mert","Özen");
// console.log(this);
// console.log(name);
// console.log(surname);
// const p1=new Person("Mehmet","Özen");
// console.log(p1);
// console.log(p1.name);

function Person(name,surname){
        const person={};
        person.name=name;
        person.surname=surname;
        person.fullName=function(){
            console.log(this);
            console.log(person.name);
            console.log(this.name);
            console.log(person.surname);
            console.log(this.surname);
        }
        return person;
}

// console.log(Person("mesut","özen"));
const p1=Person("mesut","özen");
// console.log(p1);
p1.fullName();
p1.name="mehmet";
// console.log(p1);
p1.fullName();

const p2=Person("mert","özen");
// console.log(p2);
p2.fullName();
p2.name="mehmet";
// console.log(p2);
p2.fullName();