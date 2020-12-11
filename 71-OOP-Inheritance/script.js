function Person(_name,_surname){
    this.name=_name;
    this.surname=_surname;
}

Person.prototype.fullName=function(){
    return this.name+" "+this.surname;
}

// const p=new Person("mert","özen");
// console.log(p);
// console.log(p.fullName());

function Employee(_name,_surname,_salary){
    Person.call(this,_name,_surname);
    this.salary=_salary;
}

Employee.prototype=Object.create(Person.prototype);

Employee.prototype.getInfoEmployee=function(){
    return this.fullName()+" "+"Maaş:"+this.salary+" TL";
}

function Customer(_name,_surname,_companyName){
    Person.call(this,_name,_surname);
    this.companyName=_companyName;
}

Customer.prototype=Object.create(Person.prototype);
// Customer.prototype=Person.prototype;

Customer.prototype.getInfoCustomer=function(){
    return this.fullName()+" "+"Şirket Adı:"+this.companyName;
}

const emp=new Employee("Mert","Özen",5000);
console.log(emp);
console.log(emp.hasOwnProperty("name"));//Object ile gelen özelliklerde kullanılabilir
console.log(emp.name);
console.log(emp.surname);
console.log(emp.salary);
console.log(emp.fullName());
console.log(emp.getInfoEmployee());

const cst=new Customer("Mehmet","Özen","Baykar");
console.log(cst);
console.log(cst.hasOwnProperty("name"));//Object ile gelen özelliklerde kullanılabilir
console.log(cst.name);
console.log(cst.surname);
console.log(cst.companyName);
console.log(cst.fullName());
console.log(cst.getInfoCustomer());

const cst2=new Customer("Mesut","Özen","Baykar");
console.log(cst2);
console.log(cst2.hasOwnProperty("name"));//Object ile gelen özelliklerde kullanılabilir
console.log(cst2.name);
console.log(cst2.surname);
console.log(cst2.companyName);
console.log(cst2.fullName());
console.log(cst2.getInfoCustomer());
