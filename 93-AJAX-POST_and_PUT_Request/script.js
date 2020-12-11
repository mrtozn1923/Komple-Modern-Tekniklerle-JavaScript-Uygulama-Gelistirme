// GET:sunucudan veri çekmek için kullanılır.
// POST: elimde yeni veri var al bunu ekle
// PUT: elimde yeni veri var ayrıca yol(path) bilgiside var al bunu ekle eğer aynı veriden varsa güncelle


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
    httpPost(url,data,callback){
        this.xhttp.open("POST",url);
        this.xhttp.setRequestHeader("Content-type","application/json");
        this.xhttp.onload=()=>{
            if(this.xhttp.status===201){
                callback(this.xhttp.responseText);
            }
        }
        this.xhttp.send(JSON.stringify(data));
    }
    httpPut(url,data,callback){
        this.xhttp.open("PUT",url);
        this.xhttp.setRequestHeader("Content-type","application/json");
        this.xhttp.onload=()=>{
            if(this.xhttp.status===200){
                callback(this.xhttp.responseText);
            }
        }
        this.xhttp.send(JSON.stringify(data));
    }
}

const request=new HTTPRequest();
// request.httpGet("https://jsonplaceholder.typicode.com/todos",getTodos);
// // console.log("Deneme");
// function getTodos(todos){
//     console.log(todos);
// }

// request.httpPost("https://jsonplaceholder.typicode.com/todos",{
//     "userId": 1,
//     "title": "delectus aut gsgsg",
//     "completed": false
//   },function(responseText){
//     console.log(responseText);
//   });

 request.httpPut("https://jsonplaceholder.typicode.com/todos/2",{
    "userId": 1,
    "title": "delectus aut gsgsg",
    "completed": false
  },function(responseText){
    console.log(responseText);
  });