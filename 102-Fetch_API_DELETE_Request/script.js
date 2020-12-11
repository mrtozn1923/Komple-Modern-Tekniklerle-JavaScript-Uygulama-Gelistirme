class HTTPRequest{
    getHTTP(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        })
    }
    postHTTP(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(error => reject(error));
        });
    }
    putHTTP(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(error => reject(error));
        });
    }
    deleteHTTP(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:"DELETE"})
            .then(response=>response.json())
            .then(data=>resolve("Silme işlemi başarılı"))
            .catch(error=>reject(error));
        })
    }
}

const request=new HTTPRequest();
// let todos;
// request.getHTTP("https://jsonplaceholder.typicode.com/todos/").then(data=>{
//     todos=data;
//     console.log(todos);
// });

// request.postHTTP("https://jsonplaceholder.typicode.com/todos",{
//     userId: 1,
//     title: "delectus aut autemgadga",
//     completed: false
//   }).then(todo=>console.log(todo)).catch((error=>console.log(error)));

// request.putHTTP("https://jsonplaceholder.typicode.com/todos/1",{
//     userId: 1,
//     title: "delectus aut autembbbb",
//     completed: false
//   }).then(todo=>console.log(todo)).catch((error=>console.log(error)));

request.deleteHTTP("https://jsonplaceholder.typicode.com/todos/1").then(message=>{
    console.log(message);
}).catch(error=>console.log(error));