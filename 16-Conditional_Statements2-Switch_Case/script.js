// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let day = "";

switch (new Date().getDay()) {
    case 0:
        console.log("Pazar");
        day = "Pazar";
        break;
    case 1:
        console.log("Pazartesi");
        day = "Pazartesi";
        break;
    case 2:
        console.log("Salı");
        day = "Salı";
        break;
    case 3:
        console.log("Çarşamba");
        day = "Çarşamba";
        break;
    case 4:
        console.log("Perşembe");
        day = "Perşembe";
        break;
    case 5:
        console.log("Cuma");
        day = "Cuma";
        break;
    case 6:
        console.log("Cumartesi");
        day = "Cumartesi";
        break;

}
console.log(day);