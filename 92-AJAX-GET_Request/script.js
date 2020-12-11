// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=function(){
//             console.log(this);
//             if(this.xhttp.status===200){
//                 console.log(this.xhttp.responseText);
//             }
//         }
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos");

//-----------------------

// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=function(){
//             console.log(this);
//             if(this.status===200){
//                 console.log(this.responseText);
//             }
//         }
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos");

//-----------------------
// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=function(){
//             console.log(this);
//             if(this.xhttp.status===200){
//                 console.log(this.xhttp.responseText);
//             }
//         }.bind(this)
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos");

///---------------------
// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=() =>{
// //             console.log(this);
//             if(this.xhttp.status===200){
//                 console.log(this.xhttp.responseText);
//             }
//         }
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos");

//---------------------
// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=() =>{
//             // console.log(this);
//             if(this.xhttp.status===200){
//                 // console.log(this.xhttp.responseText);
//                 return this.xhttp.responseText;
//             }
//         }
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// let todos=request.httpGet("https://jsonplaceholder.typicode.com/todos");
// console.log(todos);

//--------------------

// class HTTPRequest{
//     constructor(){
//         this.xhttp=new XMLHttpRequest();
//     }
//     httpGet(url,callback){
//         this.xhttp.open("GET",url);
//         this.xhttp.onload=() =>{
//             // console.log(this);
//             if(this.xhttp.status===200){
//                 // console.log(this.xhttp.responseText);
//                 // return this.xhttp.responseText;
//                 callback(this.xhttp.responseText);
//             }
//         }
//         this.xhttp.send();
//     }
// }

// const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos",function(responseText){
//     console.log(responseText);
// });

//--------------------

class HTTPRequest{
    constructor(){
        this.xhttp=new XMLHttpRequest();
    }
    httpGet(url,callback){
        this.xhttp.open("GET",url);
        this.xhttp.onload=() =>{
            // console.log(this);
            if(this.xhttp.status===200){
                // console.log(this.xhttp.responseText);
                // return this.xhttp.responseText;
                callback(this.xhttp.responseText);
            }
        }
        this.xhttp.send();
    }
}

const request=new HTTPRequest();
request.httpGet("https://jsonplaceholder.typicode.com/todos",getTodos);
// console.log("Deneme");
function getTodos(todos){
    console.log(todos);
}
