class Person{ //BaseClass, SuperClass
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
//Object.create(Person)
class Employee extends Person{ //SubClass, DerivedClass
    constructor(_name,_surname,_salary){
        //Person.call(this,_name,_surname)
        super(_name,_surname);
        this.salary=_salary;
    }
    getInfoEmployee(){
        return `Ad Soyad: ${this.getFullName()}, Maaş:${this.salary}`;
    }
}
// Employee.prototype.getInfoEmployee()=function(){
// }

class Customer extends Person{ //SubClass, DerivedClass
    constructor(_name,_surname,_companyName){
        //Person.call(this,_name,_surname)
        super(_name,_surname);
        this.companyName=_companyName;
    }
    getInfoCustomer(){
        return `Ad Soyad: ${this.getFullName()}, Şirket Adı:${this.companyName}`;
    }
}

const emp=new Employee("Mert","Özen",5000);
console.log(emp);
console.log(emp.getInfoEmployee());
// console.log(emp.getInfoCustomer()) //Hatalı kullanım;

const cst=new Customer("Mert","Özen","Baykar");
console.log(cst);
console.log(cst.getInfoCustomer());