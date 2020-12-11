// const person={
//     name:"mert",
//     surname:"özen",
//     fullName:function(){
//         console.log(this.name+" "+this.surname);
//         console.log(this);
//     }
// }

// person.fullName();

// const person={
//     name:"mert",
//     surname:"özen",
//     fullName:function(){
//         console.log(this.name+" "+this.surname);
//         console.log(this);
//     }.bind(this)
// }

// person.fullName();

const person={
    name:"mert",
    surname:"özen",
    fullName:() =>{
        console.log(this.name+" "+this.surname);
        console.log(this);
        console.log(person.name+" "+person.surname);
    }
}

person.fullName();