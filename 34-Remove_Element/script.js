let value="";
//Eleman Silme
//remove(), removeChild();

let box1=document.getElementById("box1");
let wrapper=document.getElementById("wrapper");

// box1.remove();

// wrapper.removeChild(box1);

let boxes=document.querySelectorAll(".box:nth-child(odd)");

boxes.forEach(element=>element.remove());

console.log(box1);
box1=document.getElementById("box1");
console.log(box1);

console.log(value);