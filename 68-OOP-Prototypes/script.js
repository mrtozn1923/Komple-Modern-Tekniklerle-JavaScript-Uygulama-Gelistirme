//Constructor
// function Person(_name,_surname){
//     this.name=_name;
//     this.surname=_surname;
//     this.fullName=function(){
//         return this.name+" "+this.surname
//     }
// }

// const p1=new Person("Mert","Özen");
// const p2=new Person("Mehmet","Özen");

// console.log(p1);
// console.log(p2);

//Constructor
function Person(_name,_surname){
    this.name=_name;
    this.surname=_surname;
}

Person.prototype.fullName=function(){
    return this.name+" "+this.surname
}
Person.prototype.toString=function(){
    return this.name+" "+this.surname
}

const p1=new Person("Mert","Özen");
const p2=new Person("Mehmet","Özen");

console.log(p1);
console.log(p2);
console.log(p1.fullName());
console.log(p2.fullName());
console.log(p1.toString());

p1.fullName=function(){
    return this.surname+" "+this.name
}
console.log(p1);