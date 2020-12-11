//Eleman Oluşturma
//createElement(), createTextNode(), appendChild(), insertBefore()
let value = "";

//innerHTML ile eleman oluşturma
const wrapper = document.getElementById("wrapper");
wrapper.innerHTML += "<ul>" +
    "<li>TR</li>" +
    "</ul>";

wrapper.innerHTML +=`<ul>
                    <li style="color:red;">AZ</li>
                    </ul>`;

//createElement() ile eleman oluşturma
const box1=document.createElement("div");
box1.id="box1";
box1.className="box box-blue";
const link=document.createElement("a");
link.href="#";
link.textContent="Tıkla";

wrapper.appendChild(box1);
box1.appendChild(link);

// box1.textContent+="Kutu1";
box1.appendChild(document.createTextNode("Kutu1"));
box1.insertBefore(document.createTextNode("Kutu1"),link);


console.log(value);