let btnAdd = document.getElementById("add");
let btnDelete = document.getElementById("delete");
let textBox = document.getElementById("text-box");
let content = document.getElementById("content");
let messages = [];

btnAdd.addEventListener("click", addMessage);
window.addEventListener("load", getMessage);
btnDelete.addEventListener("click",deleteMessage);

function getMessage() {
    if (localStorage.getItem("message") !== null) {
        messages = JSON.parse(localStorage.getItem("message"));
        content.innerText="";
        for (element in messages) {
            content.innerHTML += `${messages[element]}<br>`;
        }
    } else {
        content.innerText = "Görüntülenecek bir şey yok.";
    }
}

function addMessage() {
    if (textBox.value != "") {
        messages.push(textBox.value);
        localStorage.setItem("message", JSON.stringify(messages));
        textBox.value="";
        getMessage();
    } else {
        alert("Herhangi bir değer girmediniz.");
    }
}

function deleteMessage(){
    if(localStorage.getItem("message")!==null){
        localStorage.removeItem("message");
        getMessage();
    }
    else{
        alert("Silinecek bir şey yok.");
    }
}