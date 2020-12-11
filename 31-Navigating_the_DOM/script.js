let element="";

//HTML Collection
const lists=document.getElementsByTagName("ul");
const listItems=document.getElementsByTagName("li");
//Node List
const lists2=document.querySelectorAll(".list2 ul");

//Node List
element=lists2;
element=lists2[0].childNodes; //nodelist
element=lists2[0].children; //html collection
element=lists2[0].firstChild;
element=lists2[0].firstElementChild;
element=lists2[0].lastChild;
element=lists2[0].lastElementChild;

//HTML Collection
element=lists;
element=lists[0];
element=lists[0].firstChild;
element=lists[0].firstElementChild;

let es6=lists2[lists2.length-1].lastElementChild;
element=es6.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild;

element=es6.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild;

console.log(element);