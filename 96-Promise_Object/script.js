//Araştırma Konusu: Promise Metodları(resolve, reject, all, race)

//pending: askıda olan, asılı
//fulfilled: yerine getirilmiş
//rejected: reddedildi

// let promise=new Promise(function(resolve,reject){
//     setTimeout(() => {
//     //    resolve("value");
//        reject("error"); 
//     }, 3000);
// });

// promise.then(function(resolve){
//     console.log(resolve);
//     console.log(promise);
// }).catch(function(reject){
//     console.log(reject);
//     console.log(promise);
// });
// console.log(promise);

///------------------------------
function getUser(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            //user bilgisinin dışarıdan alındığını düşünün
            let user={name:"mert",surname:"özen"};
            // user=null;
            if(user!==null){
                resolve(user);
            }else{
                reject("Kullanıcı bilgisi alınamadı.");
            }
        }, 2000);
    });
}
let user;
getUser().then(function(_user){
    console.log(_user);
    user=_user;    
}).catch(function(error){
    console.log(error);
});

console.log(user);