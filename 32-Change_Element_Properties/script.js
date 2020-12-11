let element="";

// let box1=document.getElementById("box1");

// element=box1.id;
// element=box1.className;
// element=box1.classList;
// element=box1.classList[0];
// element=box1.classList[1];
// element=box1.textContent;
// box1.textContent="Kutu4";
// box1.textContent="<span>Kutu4</span>";
// box1.innerHTML="<span style='color:red'>Kutu4</span>";

//Style Özelliklerini Değiştirme

// box1.style.backgroundColor="#00ff00";
// box1.style.backgroundColor="green";
// box1.style.color="blue";

//element.classList altındaki özellikler

//add:bir sınıf ekler
//remove:bir sınıfı siler
//toggle:bir sınıf ekler varsa siler
//contains:bir sınıfın var olup olmadığını kontrol eder
//replace:varolan bir sınıfı yeni bir sınıfla değiştirir
//item():belirilen indis numarasına sahip sınıf adını döndürür
//toString():sınıf listesini bir dize olarak döndürür.

// box1.classList.add("box-text-color-orange");
// box1.classList.remove("box-text-color-orange");
// function changeColor(){
//     box1.classList.toggle("box-text-color-orange");
//     if(box1.classList.contains("box-text-color-orange")){
//         console.log("Evet yazı turuncu");
//     }
//     else{
//         console.log("Hayır yazı turuncu değil");
//     }
// }

let lists=document.querySelectorAll("li.list-item");
lists=document.querySelectorAll("li.list-item:nth-child(1)");
lists=document.querySelectorAll("li.list-item:nth-child(2)");
lists=document.querySelectorAll("li.list-item:nth-child(odd)");
lists=document.querySelectorAll("li.list-item:nth-child(even)");
element=lists;

element.forEach(element => {
    element.style.backgroundColor="gray";
});

console.log(element);