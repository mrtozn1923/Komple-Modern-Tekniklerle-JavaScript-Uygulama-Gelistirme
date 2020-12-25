//commonjs modules-> https://nodejs.org/docs/latest/api/modules.html#modules_module
//es6 modules-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

// const msg1=require("./person");
// console.log(msg1);
// msg1();
//----------------------
// const msg=require("./person");
// console.log(msg);
// msg();

// const msg=require("./person");
// console.log(msg);
// msg.msg1();
// msg.msg2();
//----------------------

// const person=require("./person");

// console.log(person);
// console.log(person.fullName());

//----------------------ES6 Modules-----
// import {name,getName} from "./person";
// console.log(name);
// getName();

// import {person} from "./person";
// console.log(person);
// console.log(person.fullName());
//-----------------------
// import * as p1 from "./person";
// console.log(p1.name);
// p1.getName();
// console.log(p1.person);
// console.log(p1.person.fullName());
//-----------------------
// import {Person} from "./person";
// const p1=new Person("mehmet","özen");
// console.log(p1);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.getFullName());
//-----------------------
// import Person from "./person";
// const p1=new Person("mehmet","özen");
// console.log(p1);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(p1.getFullName());
//-----------------------
import Person from "./person";
console.log(Person);

