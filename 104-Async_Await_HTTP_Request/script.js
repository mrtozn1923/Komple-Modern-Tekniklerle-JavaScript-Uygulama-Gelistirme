class HTTPRequest{
    async getHTTP(url){
        const response=await fetch(url);
        const data=await response.json();
        return data;
    }
    async postHTTP(url,data){
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          });
          const responseData = await response.json();
          return responseData;
    }
    async putHTTP(url,data){
        const response=await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          const responseData=await response.json();
          return responseData;
    }
    async deleteHTTP(url){
        const response=await fetch(url,{method:"DELETE"});
        return "Silme işlemi başarılı";
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
//   }).then(todo=>console.log(todo)).catch(error=>console.log(error));

// request.putHTTP("https://jsonplaceholder.typicode.com/todos/1",{
//     userId: 1,
//     title: "delectus aut autembbbb",
//     completed: false
//   }).then(todo=>console.log(todo)).catch((error=>console.log(error)));

request.deleteHTTP("https://jsonplaceholder.typicode.com/todos/1").then(message=>{
    console.log(message);
}).catch(error=>console.log(error));