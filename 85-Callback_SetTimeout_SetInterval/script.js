// setTimeout(message(),2000);//direkt olarak fonksiyon çağrılır
// setTimeout(message,2000);
// console.log("Türkiye");

// function message(){
//     console.log("Merhaba");
// }

// setTimeout(function(){
//     console.log("Merhaba");
// },2000);
// console.log("Türkiye");

// let msgInterval=setInterval(message, 2000);
// let count=0;
// function message() {
//     console.log("Merhaba");
//     count++;
//     if(count===3){
//         clearInterval(msgInterval);
//     }
// }
// console.log("Türkiye");

// let age=0;

// setTimeout(function(){
//     age=25;
//     console.log(age);
// },2000);

// let age=0;

// setTimeout(function(){
//     age=25;
//     getAge();
// },2000);

// function getAge(){
//     console.log(age);
// }

// function getSum(sum){
//     console.log(sum);
// }

// function sum(num1,num2,callback){
//     callback(num1+num2);
// }

// sum(4,9,getSum);

//Asenkron işlemleri senkron hale getirme
// const colors=["red","green","blue"];

// function addColor(color,callback){
//     setTimeout(function(){
//         colors.push(color);
//         callback();
//     },2000);
// }

// function getAllColors(){
//     colors.forEach(function(color){
//         console.log(color);
//     });
// }

// addColor("brown",getAllColors);
// console.log("Renkler");