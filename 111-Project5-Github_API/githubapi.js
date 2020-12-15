// https://developer.github.com/v3/
// https://docs.github.com/en/free-pro-team@latest/rest
// https://api.github.com/users/mrtozn1923
// https://api.github.com/users/mrtozn1923/repos

class GithubAPI{
    constructor(){
        this.url="https://api.github.com/users/";
    }
    async getGithubData(username){
        const responseUser=await fetch(this.url+username);
        const responseRepo=await fetch(this.url+username+"/repos");

        const userData=await responseUser.json();
        const repoData=await responseRepo.json();

        return{
            user:userData,
            repos:repoData
        }
    }
}