class User{
    constructor(){
        this.avatar="";
        this.name="";
        this.location="";
        this.followers=0;
        this.bio="";
        this.htmlUrl="";
        this.reposName=[];
        this.reposStarCount=[];
        this.reposHtmlUrl=[];
    }
    clearRepos() {
        this.reposName=this.reposName.splice(0,this.reposName.length);
        this.reposStarCount=this.reposStarCount.splice(0,this.reposStarCount.length);
        this.reposHtmlUrl=this.reposHtmlUrl.splice(0,this.reposHtmlUrl.length);
    }
}