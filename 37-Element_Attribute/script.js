//Eleman Öznitelikleri(Element Attribute)
/*
getAttribute("attribute");
setAttribute("attribute","value");
removeAttribute("attribute");
*/
let value="";

let paragraf=document.getElementById("paragraph");

value=paragraf.getAttribute("id");
value=paragraf.getAttribute("class");
paragraf.setAttribute("style","color:red;border:1px solid black;");
paragraf.setAttribute("style","color:blue;");
paragraf.removeAttribute("style");

let link=document.getElementsByTagName("a")[0];

value=link.getAttribute("href");
link.setAttribute("href","https://www.google.com");
link.setAttribute("target","_blank");

console.log(value);