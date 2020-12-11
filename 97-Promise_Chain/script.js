//pending: askıda olan, asılı
//fulfilled: yerine getirilmiş
//rejected: reddedildi

function getUser(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            let user={userId:1,name:"mert",surname:"özen"};
            // user=null;
            if(user!==null){
                resolve(user);
            }
            else{
                reject("Kullanıcı bilgisi alınamadı.");
            }

        }, 2000);
    });
}

function getBooks(userId){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            let books=[{bookName:"Nutuk",name:"M.Kemal Atatürk"},{bookName:"Sefiller",name:"Victor Hugo"}];
            // books=null;
            if(books!==null){
                resolve(books);
            }
            else{
                reject("Kitap bilgisi alınamadı.");
            }

        }, 2000);
    });
}

getUser().then(function(user){
    console.log(user);
    return getBooks(user.userId);
}).then(function(books){
    console.log(books);
}).catch(function(error){
    console.log(error);
});

console.log("Merhaba");