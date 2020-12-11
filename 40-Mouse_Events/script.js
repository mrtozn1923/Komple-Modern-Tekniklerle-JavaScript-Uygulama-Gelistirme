let wrapper=document.getElementById("wrapper");
let header=document.getElementById("header");
let content=document.getElementById("content");
//click:tıklama
// header.addEventListener("click",(e)=>console.log("tıklandı"));

//double click:çift tıklama
// header.addEventListener("dblclick",(e)=>console.log("tıklandı"));

//mouse down:herhangi bir fare düğmesine basma
// header.addEventListener("mousedown",(e)=>console.log("tıklandı"));
// header.addEventListener("mousedown",(e)=>console.log(e.button));

//mouse up:tıklamayı bıraktığında
// header.addEventListener("mouseup",(e)=>console.log("tıklandı"));

//mouse over:üzerine geldiğinde
// header.addEventListener("mouseover",(e)=>console.log("üzerine gelindi"));

//mouse out:üzerinden ayrıldığında
// header.addEventListener("mouseout",(e)=>console.log("üzerinden ayrıldı"));

//mouse enter:üzerine geldiğinde
// header.addEventListener("mouseenter",(e)=>console.log("üzerine gelindi"));

//mouse leave:üzerinden ayrıldığında
// header.addEventListener("mouseleave",(e)=>console.log("üzerinden ayrıldı"));

//Parent ile kullanım

//mouse over:üzerine geldiğinde
// wrapper.addEventListener("mouseover",(e)=>console.log("üzerine gelindi"));

//mouse out:üzerinden ayrıldığında
// wrapper.addEventListener("mouseout",(e)=>console.log("üzerinden ayrıldı"));

//mouse enter:üzerine geldiğinde
wrapper.addEventListener("mouseenter",(e)=>console.log("üzerine gelindi"));

//mouse leave:üzerinden ayrıldığında
wrapper.addEventListener("mouseleave",(e)=>console.log("üzerinden ayrıldı"));