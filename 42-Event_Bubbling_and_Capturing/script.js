//element.addEventListener(event, function, useCapture);
//useCapture: Olayın bubbling (kabarcıklanma) veya capturing (yakalama) olduğunu belirten parametredir. Opsiyoneldir yani zorunlu değildir. Boolean (true/false) bir değer alır. Hiçbir değer yazılmazsa false değerini alır. Eğer false ise olayın bubbling (kabarcıklanma), true ise olayın capturing (yakalama) olduğunu belirtir. 

let wrapper=document.getElementById("wrapper");
let list=document.getElementById("list");
let listItem=document.querySelectorAll("#list>li");

wrapper.addEventListener("click",(e)=>{
    console.log("kapsayıcıya tıklandı")
});

list.addEventListener("click",(e)=>{
    // console.log("listeye tıklandı")
    e.stopPropagation();
    console.log(e.target);
    // console.log(e.target.textContent);
    // if(e.target.textContent==="Name2"){
    //     console.log("2.eleman tıklandı");
    // }
});

listItem[0].addEventListener("click",(e)=>{
    console.log("liste elemanına tıklandı")
   e.stopPropagation();
});

// wrapper.addEventListener("click",(e)=>{
//     console.log("kapsayıcıya tıklandı")
// },true);

// list.addEventListener("click",(e)=>{
//     console.log("listeye tıklandı")
// },true);

// listItem[0].addEventListener("click",(e)=>{
//     console.log("liste elemanına tıklandı")
// },true);


