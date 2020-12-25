// module.exports=function msg1() {
//     console.log("msg1 calıştı");
// }

//----------------------

// module.exports=function msg1() {
//     console.log("msg1 calıştı");
// }
// module.exports=function msg2() {
//     console.log("msg2 calıştı");
// }
//----------------------
// module.exports.msg1=function msg1() {
//     console.log("msg1 calıştı");
// }
// module.exports.msg2=function msg2() {
//     console.log("msg2 calıştı");
// }
//----------------------
// module.exports = {
//     name: "Mert",
//     surname: "Özen",
//     fullName: function() {
//         console.log(this.name+" "+this.surname);
//     }
// }

//----------------------ES6 Modules-----
// export const name="Mert";
// export function getName() {
//     console.log("Ad:"+name);
// }
// export const person={
//     name:"Mert",
//     surname:"Özen",
//     fullName:function() {
//         return this.name+" "+this.surname;
//     }
// }
///-----------------------------
// export const name="Mert";
// export function getName() {
//     console.log("Ad:"+name);
// }
// export const person={
//     name:"Mert",
//     surname:"Özen",
//     fullName:function() {
//         return this.name+" "+this.surname;
//     }
// }
///-----------------------------
// export class Person{
//     constructor(_name,_surname){
//         this.name=_name;
//         this.surname=_surname
//     }
//     getFullName(){
//         return this.name+" "+this.surname;
//     }
// }
//----------------------
// export default class Person{
//     constructor(_name,_surname){
//         this.name=_name;
//         this.surname=_surname
//     }
//     getFullName(){
//         return this.name+" "+this.surname;
//     }
// }
//----------------------
let randomStringArray=["a","b","c"];
export default randomStringArray;