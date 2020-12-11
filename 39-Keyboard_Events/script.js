//keypress
// document.addEventListener("keypress",(e)=>console.log(e.key));

//keydown
// document.addEventListener("keydown",(e)=>console.log(e.key));

//keyup
// document.addEventListener("keyup",(e)=>console.log(e.key));


let header=document.getElementById("header");
let textBox=document.getElementById("text-box");


// textBox.addEventListener("keyup",(e)=>header.textContent=e.target.value);

textBox.addEventListener("keyup",(e)=>{
    if(e.target.value!=""){
    header.textContent=e.target.value
    }else{
        header.textContent="Başlık";
    }
});
