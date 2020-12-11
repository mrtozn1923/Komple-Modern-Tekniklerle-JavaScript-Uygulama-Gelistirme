// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt");
//     xhttp.send();
//   }

const xhttp = new XMLHttpRequest();

console.log(xhttp);

xhttp.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState === 4) {
        if (this.status === 200) {
            console.log(xhttp);
        } else if (this.status === 404) {
            console.log("İçerik bulunamadı.");
            console.log(this.statusText);
        }
    }
}

xhttp.open("GET", "ajax_info.txt");
// xhttp.open("GET", "ajax_info3.txt");
xhttp.send();