const githubApi = new GithubAPI();
const ui = new UI();
const user = new User();

eventListeners();

function eventListeners() {
    ui.btnUserSearch.addEventListener("click", getData);
    document.addEventListener("DOMContentLoaded", getAllSearchedUser);
    ui.btnRemoveAllLastUserSearch.addEventListener("click", removeAllSearchedUser);
    ui.contentLastUserSearch.addEventListener("click", getLastUserName);
}

function getAllSearchedUser() {
    let users = Storage.getSearchedUsersFromStorage();
    if (users.length > 0) {
        ui.addSearchedUserToUI(users);
        ui.btnRemoveAllLastUserSearch.style.display = "inline-block";
    } else {
        // ui.contentLastUserSearch.innerHTML="";
        ui.removeAllSearchedFromUI();
        ui.btnRemoveAllLastUserSearch.style.display = "none";
    }
}

function removeAllSearchedUser() {
    Storage.clearAllSearchedUsersFromStorage();
    getAllSearchedUser();
}

function getLastUserName(e) {
    ui.inptUserName.value = e.target.innerText;
    getData();
}

function getData() {

    let userName = ui.inptUserName.value.trim();

    if (userName === "") {
        UI.showNotification("danger", "Lütfen kullanıcı adını girin.", ui.main, ui.containerLastUserSearch, 1500);
    } else {
        githubApi.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found") {
                    //hata mesajı
                    UI.showNotification("danger", "Kullanıcı bulunamadı.", ui.main, ui.containerLastUserSearch, 1500);
                } else {
                    addUserObjectData(response);
                    addUserObjectRepoData(response);

                    Storage.addSearchedUserToStorage(ui.inptUserName.value);
                    getAllSearchedUser();
                    
                    UI.clearInputs(ui.inptUserName);

                    //Verileri arayüze ekleme
                    //kullanıcı bilgileri
                    ui.showUserInfo(user);
                    //repo bilgileri
                    ui.showUserRepoInfo(user);
                }
            })
            .catch(error => console.log(error));
    }
}

function addUserObjectData(response) {
    user.avatar = response.user.avatar_url;
    user.name = response.user.name;
    user.location = response.user.location;
    user.followers = response.user.followers;
    user.bio = response.user.bio;
    user.htmlUrl = response.user.html_url;
}

function addUserObjectRepoData(response) {
    user.clearRepos();
    if (response.repos.length !== 0) {
        response.repos.forEach(function(repo) {
            user.reposName.push(repo.name);
            user.reposStarCount.push(repo.stargazers_count);
            user.reposHtmlUrl.push(repo.html_url);
        });
    }
}