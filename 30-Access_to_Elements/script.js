//Id
let element = document.getElementById("box1");
//Class->HTML Collection
element = document.getElementsByClassName("box");
element = document.getElementsByClassName("box")[0];
element = document.getElementsByClassName("box box-blue")[0];
element = document.getElementsByClassName("box-blue");
element = document.getElementsByClassName("box-blue")[0];
//Tag(Etiket)->HTML Collection
element = document.getElementsByTagName("ul");
element = document.getElementsByTagName("ul")[0];
element = document.getElementsByTagName("body")[0];
//querySelector()
element = document.querySelector("h2");
element = document.querySelector("ul>li>ul");
//querySelectorAll()->NodeList
element = document.querySelectorAll("ul")[0].childNodes[1];
element = document.querySelectorAll("ul")[0].childNodes[1].nextSibling.nextSibling;
// console.log(element);

//HTML Collection
// element = document.getElementsByTagName("li");
// console.log(element);

// element.forEach(function(element) {
//     console.log(element);
// });


//Nodelist
element = document.querySelectorAll("li");
console.log(element);

element.forEach(function(element) {
    console.log(element);
});