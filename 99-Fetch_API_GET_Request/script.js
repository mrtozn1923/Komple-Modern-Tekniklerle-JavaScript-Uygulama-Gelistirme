const btnGetTodos=document.getElementById("btn-get-todos");

class HTTPRequest{
    getHTTP(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        })
        
    }
}

const request=new HTTPRequest();
let todos;
request.getHTTP("https://jsonplaceholder.typicode.com/todos/").then(data=>{
    todos=data;
    console.log(todos);
});
