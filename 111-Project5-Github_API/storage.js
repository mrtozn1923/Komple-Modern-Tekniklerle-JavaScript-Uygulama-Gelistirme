class Storage{
    static getSearchedUsersFromStorage(){

        let users;
        if(localStorage.getItem("searchedUsers")!==null){
            users=JSON.parse(localStorage.getItem("searchedUsers"));
        }else{
            users=[];
        }
        return users;

    }
    static addSearchedUserToStorage(username){
        let users=this.getSearchedUsersFromStorage();
        if(users.indexOf(username)===-1){
            if(users.length<3){
                users.push(username);
            }else{
                users.splice(0,1);
                users.push(username);
            }
            
        }
        localStorage.setItem("searchedUsers",JSON.stringify(users));
    }
    static clearAllSearchedUsersFromStorage(){
        localStorage.removeItem("searchedUsers");
    }
}