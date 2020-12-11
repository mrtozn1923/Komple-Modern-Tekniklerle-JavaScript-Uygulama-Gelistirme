let value="";
//Eleman Değiştirme
//replaceChild(newElement,oldElement);

//eleman oluşturma
let header=document.createElement("h1");
header.textContent="Merhaba";

let box2=document.getElementById("box2");
let wrapper=document.getElementById("wrapper");

wrapper.replaceChild(header,box2);

let box3=document.getElementById("box3");
wrapper.replaceChild(box3,header);

let box1=document.getElementById("box1");
let box4=document.getElementById("box4");
document.body.replaceChild(box1,box4);

// wrapper.replaceChild(box3,box1); //geçersiz
wrapper.replaceChild(box1,box3); //geçerli

console.log(value);