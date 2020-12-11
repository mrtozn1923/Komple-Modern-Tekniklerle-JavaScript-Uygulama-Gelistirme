//Düğüm Kopyalama(Node Clone)
//cloneNode(true/false)


let div=document.getElementsByTagName("div")[0];
let clone=div.cloneNode(false);
clone=div.cloneNode(true);

let header=document.getElementsByTagName("h1")[0];

document.body.appendChild(clone);
document.body.insertBefore(clone,header);