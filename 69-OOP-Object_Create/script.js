const person={
    // name:"John",
    surname:"Doe",
    fullName:function(){
        return this.name+" "+this.surname
    }
}

console.log(person);

const p1=Object.create(person);
console.log(p1);
console.log(p1.name);
console.log(p1.surname);

// p1.name="mert";

console.log(p1.name);
console.log(p1.surname);

console.log(p1);

// Object.prototype.name="Mesut";

console.log(p1.name);