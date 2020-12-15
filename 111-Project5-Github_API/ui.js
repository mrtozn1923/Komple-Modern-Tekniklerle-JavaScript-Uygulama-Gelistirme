class UI {
    constructor() {
        this.avatar = document.getElementById("avatar");
        this.inptUserName = document.getElementById("inpt-user-name");
        this.btnUserSearch = document.getElementById("btn-user-search");
        this.name = document.getElementById("name");
        this.location = document.getElementById("location");
        this.followers = document.getElementById("followers");
        this.bio = document.getElementById("bio");
        this.githubUrl = document.getElementById("github-url");
        this.contentUserRepos = document.getElementById("content-user-repos");
        this.main = document.getElementsByTagName("main")[0];
        this.containerLastUserSearch = document.getElementById("container-last-user-search");
        this.contentLastUserSearch=document.getElementById("content-last-user-search");
        this.btnRemoveAllLastUserSearch=document.getElementById("btn-remove-all-last-user-search");
    }
    showUserInfo(user){
        this.avatar.src = user.avatar;
        this.name.innerText = user.name;
        this.location.innerText = user.location;
        this.followers.innerText = user.followers;
        this.bio.innerText = user.bio;
        this.githubUrl.innerText = user.htmlUrl;
        this.githubUrl.href = user.htmlUrl;
    }
    showUserRepoInfo(user){
        this.contentUserRepos.innerHTML = "";
        user.reposName.forEach(function(repoName, index) {
            this.createRepo(repoName, user.reposStarCount[index], user.reposHtmlUrl[index]);
        }.bind(this));
    }
    createRepo(repoName, repoStar, repoUrl) {
        this.contentUserRepos.innerHTML += `<div class="repo">
        <a href='${repoUrl}' target='_blank'class="repo-name">${repoName}</a>
        <div class="repo-star">
            <div class="container-repo-star">
                <span class="icon icon-star"></span>
            </div>
            <span class="repo-star-count">${repoStar}</span>
        </div>
        </div>`;
    }
    
    addSearchedUserToUI(users) {
        if (users.length > 0) {
            //<!-- <span class="last-user">mrtozn1923</span> -->
            this.contentLastUserSearch.innerHTML="";
            users.reverse();
            users.forEach((username)=> {
                let span = document.createElement("span");
                span.className = "last-user";
                span.textContent = username;
                this.contentLastUserSearch.appendChild(span);
            });
        }
    }
    removeAllSearchedFromUI(){
        while(this.contentLastUserSearch.firstElementChild!==null){
            this.contentLastUserSearch.removeChild(this.contentLastUserSearch.firstElementChild);
        }
    }
    static showNotification(type = "", message = "", container = "", ref = "", timeout = "") {
        const info = document.createElement("div");
        const infoIcon = document.createElement("div");
        const icon = document.createElement("span");
        const infoText = document.createElement("div");

        info.className = `info info-${type}`;
        infoIcon.className = "info-icon";
        icon.className = "icon icon-info";
        infoText.className = "info-text";

        infoText.innerText = message;

        infoIcon.appendChild(icon);
        info.appendChild(infoIcon);
        info.appendChild(infoText);
        if (ref !== "") {
            container.insertBefore(info, ref);
        } else {
            container.appendChild(info);
        }
        if (timeout !== "") {
            setTimeout(function() {
                info.remove();
            }, timeout);
        }
    }
    static clearInputs(...inputs) {
        inputs.forEach(function(element) {
            element.value = "";
        });
    }
}