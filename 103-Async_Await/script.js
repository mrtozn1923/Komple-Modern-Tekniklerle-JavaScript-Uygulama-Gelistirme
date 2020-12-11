// function message(msg){
//     return msg;
// }

// console.log(message("Merhaba"));

//-------------------
// async function message(msg){
//     return msg;
// }

// console.log(message("Merhaba"));
// message("Merhaba").then(data=>console.log(data));

//---------------------
// async function message(msg){
//     return new Promise((resolve,reject)=>{
//         resolve(msg);
//     });
// }

// console.log(message("Merhaba"));
// message("Merhaba").then(data=>console.log(data));

//-----------------------
async function message(msg){
        let promise=new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(msg!==""){
                    resolve(msg);
                }else{
                    reject("Boş değer olmamalı");
                }
                    
            }, 2000);
            
        });
        let response=await promise; //2 saniye bekleyecek
        console.log(response);
        console.log("Mert Özen");
        return response;
}

// message("Merhaba").then(data=>console.log(data)).catch(error=>console.log(error));
// console.log("Türkiye");

message("").then(data=>console.log(data)).catch(error=>console.log(error));
console.log("Türkiye");