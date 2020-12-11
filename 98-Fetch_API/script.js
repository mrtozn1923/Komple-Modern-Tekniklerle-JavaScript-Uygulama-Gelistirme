//Fetch API window içinde bulunan bir metottur. Ayrıca AJAX yerine kullanılmaktadır.
//İşlemlerin sonucunda bir promise objesi geriye döndürmektedir.

//Yerel text dosyası işlemi
//hello.txt
// console.log(window);

// function getTextFile(){
//     fetch("hello.txt").then(function(response
//         ){
//             // console.log(response.text());
//             return response.text();
//         }).then(function(data){
//             console.log(data);
//         });
// }
function getTextFile(){
    fetch("hello.txt")
    .then(response=>response.text())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
}

// getTextFile();

//Yerel json dosyası işlemi
//persons.json

function getJsonFile(){
    fetch("persons.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
}

// getJsonFile();

//Harici Web API işlemi
//https://jsonplaceholder.typicode.com/todos/

function getExternalAPI(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
}

getExternalAPI();