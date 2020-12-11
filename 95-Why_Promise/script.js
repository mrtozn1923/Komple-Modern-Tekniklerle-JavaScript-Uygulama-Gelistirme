//AJAX->Fetch API
//Callback->Promise

class User {
    constructor(_userId, _name, _surname) {
        this.userId = _userId;
        this.name = _name;
        this.surname = _surname;
    }
}
class Book {
    constructor(_bookName, _bookAuthor) {
        this.bookName = _bookName;
        this.bookAuthor = _bookAuthor;
    }
}

let user = new User("1", "Mert", "ÖZEN");
let book1 = new Book("Nutuk", "M.Kemal Atatürk");
let book2 = new Book("Sefiller", "Victor Hugo");

let books = [book1, book2];
//----------------------------------------------------------------
// class UserProfile {
//     constructor(_user, _books) {
//         this.user = _user;
//         this.books = _books;
//     }
// }
// function getUser(){
//     setTimeout(() => {
//         //verinin bir sorgu ile dönen user listesindeki elemanları gezerek aldığımızı düşünün...
//         return user;
//     }, 1000);
// }
// function getBooks(_user){
//     setTimeout(() => {
//         //verinin bir sorgu ve _user.userId değerine göre alındığını düşünün...
//         return books;
//     }, 2000);
// }

// let newUser=getUser();
// let userBooks=getBooks(newUser);

// let userProfile=new UserProfile(newUser,userBooks);
// console.log(userProfile);

//-------------Callback Chain----------

// class UserProfile {
//     constructor(_user, _books) {
//         this.user = _user;
//         this.books = _books;
//     }
// }

// function getUser(callback) {
//     setTimeout(() => {
//         //verinin bir sorgu ile dönen user listesindeki elemanları gezerek alındığını düşünün...
//         callback(user);
//     }, 1000);
// }

// function getBooks(_user, callback) {
//     setTimeout(() => {
//         //verinin bir sorgu ve _user.userId değerine göre alındığını düşünün...
//         callback(books);
//     }, 2000);
// }

// let userProfile;

// getUser(function(_user) {
// getBooks(_user, function(_books) {
//         userProfile = new UserProfile(_user, _books);
//         console.log(userProfile);
//     });
// });

//-----------------Promise Chain----------------------------

class UserProfile {
    constructor(_user, _books) {
        this.user = _user;
        this.books = _books;
    }
}

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            //verinin bir sorgu ile dönen user listesindeki elemanları gezerek alındığını düşünün...
            resolve(user);
        }, 1000);
    });

}

function getBooks(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //verinin bir sorgu ile userId değerine göre alındığını düşünün...
            resolve(books);
        }, 2000);
    });
}
let newUser;
let userProfile;
getUser()
    .then(_user => {
        newUser = _user;
        return getBooks(newUser);
    }).then(_books => {
        userProfile = new UserProfile(newUser, _books);
        console.log(userProfile);
    });