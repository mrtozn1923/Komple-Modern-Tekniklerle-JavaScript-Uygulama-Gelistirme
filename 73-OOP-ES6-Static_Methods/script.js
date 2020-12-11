class Person{
    constructor(_name="John",_surname="Doe"){
        this.name=_name;
        this.surname=_surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
    static getDefaultProperty(){
        return "John Doe";
    }
}

const p1=new Person("Mert","Özen");

console.log(p1);
console.log(p1.name);
console.log(p1.surname);
console.log(Person.getDefaultProperty());
// console.log(p1.getDefaultProperty()); //Hatalı uygulama
