//Call: başka bir constructor içerisine istenilen objeyi aktarmak için kullanılır.Parametreler tek tek gönderilir.

//Apply: başka bir constructor içerisine istenilen objeyi aktarmak için kullanılır. Parametreler bir dizi ile gönderilir.

//Bind: istenilen bir obje ile kopya bir fonksiyon oluşturmak için kullanılır. Kopyalanan fonksiyon istenilen yerde kullanılabilir. Call ve Apply ise kodun çalıştığı yerde kullanılır.

// const pc1={
//     brand:"Monster",
//     model:"Abra A5"
// }
// const pc2={
//     brand:"MSI",
//     model:"CX61-2QC"
// }

// const computer={
//     computerName:function(){
//         return this.brand+" "+this.model;
//     },
//     ramInfo:function(ram,maxRam){
//         return `RAM:${ram} GB, Maksimum RAM:${maxRam} GB`;
//     }
// }

// console.log(computer.computerName.call(pc1));
// console.log(computer.computerName.call(pc2));
// console.log(computer.computerName.apply(pc1));
// console.log(computer.computerName.apply(pc2));

// console.log(computer.ramInfo.call(pc1,16,32));
// console.log(computer.ramInfo.apply(pc1,[8,32]));

//--------Bind-----------

function Computer(_brand,_model,_version){
    this.brand=_brand;
    this.model=_model;
    this.version=_version;
}
function getComputerInfo(){
    return `${this.brand} ${this.model} V${this.version}`;
}

const computer1=new Computer("Monster","Abra A5","13.4");
const monsterInfo=getComputerInfo.bind(computer1);

// function getComputerInfo(){
//     return `${computer1.brand} ${computer1.model} V${computer1.version}`;
// }
console.log(monsterInfo());

const computer2=new Computer("MSI","CX61-2QC","1.0");
const msiInfo=getComputerInfo.bind(computer2);
// function getComputerInfo(){
//     return `${computer2.brand} ${computer2.model} V${computer2.version}`;
// }
console.log(msiInfo());
console.log(monsterInfo());