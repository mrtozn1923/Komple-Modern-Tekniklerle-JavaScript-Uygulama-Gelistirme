let input=document.getElementById("input");

let header=document.getElementById("header");
//focus
input.addEventListener("focus",function(e){
    // console.log(e.target.id);
    e.target.style.outlineColor="red";
});


//blur
input.addEventListener("blur",function(e){
    // console.log(e.target.id);
    e.target.style.borderColor="green";
    header.textContent="";
});


//copy
input.addEventListener("copy",function(e){
    header.textContent=e.target.value;
});


//paste
input.addEventListener("paste",function(e){
    console.log("paste");
});

//cut
input.addEventListener("cut",function(e){
    console.log("cut");
});

//select
input.addEventListener("select",function(e){
    console.log("select");
});