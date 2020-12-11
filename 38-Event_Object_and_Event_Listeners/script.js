// https://www.w3schools.com/jsref/obj_event.asp
// https://www.w3schools.com/js/js_events_examples.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp

//Olayları Yönetme Yöntemleri
//1-Öznitelik kullanarak (Attribute)
// function getMessage(){
//     alert("Merhaba");
// }

//2-Özellik kullanarak (Property)
//element.eventName=function(){}
// let button=document.getElementById("btn");
// button.onclick=function(){alert("Merhaba");}

//3-Olay dinleyicisi kullanarak(addEventListener)
//element.addEventListener("eventName",functionName);
// let button=document.getElementById("btn");
// button.addEventListener("click",getMessage);

// function getMessage(){alert("Merhaba");}

//element.addEventListener("eventName",function(e){}); ->e (event object)
let button=document.getElementById("btn");
button.addEventListener("click",function(e){
    // alert("Merhaba");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
});

let textBox=document.getElementById("textBox");
textBox.addEventListener("focus",()=>console.log("Odaklandı"));

//element.removeEventListener(eventName,functionName);


//varsayılan olay engelleme e.preventDefault();
//her olay engellenemez "cancelable" olması gerekir
//event.cancelable
//https://www.w3schools.com/jsref/event_onclick.asp

let box=document.getElementById("box");
let link=document.getElementById("link");
link.addEventListener("click",function(e){
    console.log("Merhaba");
    box.style.backgroundColor="red";
    e.preventDefault();
    // console.log(e.cancelable);
});