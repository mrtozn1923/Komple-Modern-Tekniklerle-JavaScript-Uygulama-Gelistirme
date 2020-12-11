class Person{
    constructor(_name,_surname){
        this.name=_name;
        this.surname=_surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

const p1=new Person("Mert","Özen");

console.log(p1);