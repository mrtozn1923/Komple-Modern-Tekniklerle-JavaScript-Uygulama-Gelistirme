const btnAddTask = document.getElementById("btn-add-task");
const txtAddTask = document.getElementById("txt-add-task");
const taskList = document.querySelector("#container-task-list .task-list");
const btnAllTasksComplete = document.getElementById("btn-all-tasks-complete");
const containerNewTask = document.getElementById("container-new-task");
const containerTaskList = document.getElementById("container-task-list");
const completedTaskList = document.querySelector("#container-completed-task-list .task-list");
const containerCompletedTaskList = document.getElementById("container-completed-task-list");
const btnAllTasksRemove = document.getElementById("btn-all-tasks-remove");
const txtSearchTask = document.getElementById("txt-search-task");

let tasks = [];
let completedTasks = [];

eventListeners();
getTasks();
getCompletedTasks();

function eventListeners() {

    btnAddTask.addEventListener("click", addTask);
    taskList.addEventListener("click", addCompleteTask);
    completedTaskList.addEventListener("click", removeCompleteTask);
    txtSearchTask.addEventListener("keyup", searchTask);
}

function getTasks() {
    if (localStorage.getItem("tasks") !== null && localStorage.getItem("tasks") !== "[]" && localStorage.getItem("tasks") !== "") {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(element => addTaskUI(element));
        btnAllTasksComplete.style.display = "block";
        txtSearchTask.removeAttribute("disabled");
    } else {
        //eleman yoksa buraya düşecek
        showInfo("danger", "Kayıtlı görev yok.", containerTaskList, taskList);
        btnAllTasksComplete.style.display = "none";
        txtSearchTask.setAttribute("disabled", "disabled");
    }
}

function getCompletedTasks() {
    if (localStorage.getItem("completedTasks") !== null && localStorage.getItem("completedTasks") !== "" && localStorage.getItem("completedTasks") !== "[]") {
        completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
        completedTasks.forEach(element => addCompletedTaskUI(element));
        btnAllTasksRemove.style.display = "block";
    } else {
        //eleman yoksa buraya düşecek
        showInfo("danger", "Tamamlanmış görev yok.", containerCompletedTaskList, completedTaskList);
        btnAllTasksRemove.style.display = "none";
    }
}

function addTask(e) {
    // console.log(e.target);
    let newTaskText = txtAddTask.value.trim();
    if (newTaskText !== null && newTaskText !== "") {
        if (tasks.indexOf(newTaskText) === -1) {
            tasks.push(newTaskText);
            addTaskUI(newTaskText);
            addTaskLocalStorage();
            showInfo("success", "Yeni görev eklendi.", containerNewTask, "", 1000);
            txtAddTask.value = "";
            txtSearchTask.removeAttribute("disabled");
            let info = document.querySelector("#container-task-list .info");
            if (info !== null) {
                info.remove();
                btnAllTasksComplete.style.display = "block";
            }
        } else {
            showInfo("danger", "Böyle bir göreviniz zaten var.", containerNewTask, "", 1500);
            txtAddTask.value = "";
        }
    } else {
        showInfo("danger", "Herhangi bir görev girmediniz.", containerNewTask, "", 1500);
    }
}

function searchTask(e) {
    let searchText = e.target.value.toLowerCase();
    let taskListItem = document.querySelectorAll("#container-task-list .task-list .task");
    let elementCount = 0;

    taskListItem.forEach(function(element) {
        let text = element.firstElementChild.innerText.toLowerCase();
        if (text.indexOf(searchText) === -1) {
            element.style.display = "none";
            elementCount++;
        } else {
            element.style.display = "flex";
        }
    });
    if (elementCount === taskListItem.length) {
        if (document.querySelector("#container-task-list .info") === null) {
            showInfo("danger", "Eşleşen sonuç bulunamadı.", containerTaskList, taskList); 
        }

    } else {
        try {
            document.querySelector("#container-task-list .info").remove();
        } catch (error) {
        }
    }
}

function addCompleteTask(e) {
    if (e.target.className === "icon icon-done") {
        let completedTasksText = e.target.parentElement.previousElementSibling.innerText;
        completedTasks.push(completedTasksText);
        addCompletedTaskLocalStorage();
        addCompletedTaskUI(completedTasksText);
        let info = document.querySelector("#container-completed-task-list .info");
        if (info !== null) {
            info.remove();
            btnAllTasksRemove.style.display = "block";
        }
        removeTaskLocalStorage(completedTasksText);
        removeTaskUI(e.target.parentElement.parentElement);
        //if ile tasks dizisinin boş olup olmadığını kontrol et boşsa getTasks() fonksiyonu çalışsın
        if (tasks.length === 0) {
            getTasks();
        }
    } else if (e.target.id === "btn-all-tasks-complete") {
        //tüm kayıtlı görevleri tamamlama
        document.querySelectorAll("#container-task-list .task-list .task .task-text").forEach(function(element) {
            completedTasks.push(element.innerText);
            addCompletedTaskLocalStorage();
            addCompletedTaskUI(element.innerText);
            let info = document.querySelector("#container-completed-task-list .info");
            if (info !== null) {
                info.remove();
                btnAllTasksRemove.style.display = "block";
            }
            removeTaskLocalStorage(element.innerText);
            removeTaskUI(element.parentElement);
            // if ile tasks dizisinin boş olup olmadığını kontrol et boşsa getTasks() fonksiyonu çalışsın
            if (tasks.length === 0) {
                getTasks();
            }
        });

    }
}

function removeCompleteTask(e) {
    if (e.target.className === "icon icon-remove") {

        //completedTasks dizi üzerinden eleman silme
        let completedTaskText = e.target.parentElement.previousElementSibling.innerText;

        let nodeList = document.querySelectorAll("#container-completed-task-list .task-list .task"); //nodelistesi geri dönecek
        nodeList.forEach(function(element, index) {
            if (e.target.parentElement.parentElement === element) {
                completedTasks.splice(index, 1);
            }
        });
        // completedTasks.forEach(function(completedTask, index) {
        //     if (completedTask === completedTaskText) {
        //         completedTasks.splice(index,1);
        //     }
        // });

        //Arayüzden tamamlanmış görev silme
        removeCompletedTaskUI(e.target.parentElement.parentElement);

        //LS üzerinden görevi silme
        removeCompletedTaskLocalStorage();

        let info = document.querySelector("#container-completed-task-list .info");
        if (info !== null) {
            info.remove();
            btnAllTasksRemove.style.display = "block";
        }

        if (completedTasks.length === 0) {
            getCompletedTasks();
        }
    } else if (e.target.id === "btn-all-tasks-remove") {
        //completedTasks dizi üzerinden eleman silme
        document.querySelectorAll("#container-completed-task-list .task-list .task .task-text").forEach(function(element) {

            let nodeList = document.querySelectorAll("#container-completed-task-list .task-list .task"); //nodelistesi geri dönecek
            nodeList.forEach(function(el, index) {
                if (element.parentElement === el) {
                    completedTasks.splice(index, 1);
                }
            });
            //Arayüzden tamamlanmış görev silme
            removeCompletedTaskUI(element.parentElement);

            //LS üzerinden görevi silme
            removeCompletedTaskLocalStorage();

            let info = document.querySelector("#container-completed-task-list .info");
            if (info !== null) {
                info.remove();
                btnAllTasksRemove.style.display = "block";
            }

            if (completedTasks.length === 0) {
                getCompletedTasks();
            }
        });
    }
}

function addTaskUI(newTaskText) {
    const task = document.createElement("div");
    const taskText = document.createElement("div");
    const taskIcon = document.createElement("div");
    const icon = document.createElement("span");

    task.className = "task";
    taskText.className = "task-text";
    taskIcon.className = "task-icon";
    icon.className = "icon icon-done";

    taskText.innerText = newTaskText;

    taskIcon.appendChild(icon);
    task.appendChild(taskText);
    task.appendChild(taskIcon);
    taskList.insertBefore(task, btnAllTasksComplete);
}

function removeTaskUI(removeTask) {
    removeTask.remove();
}

function addCompletedTaskUI(completedTaskText) {
    const task = document.createElement("div");
    const taskText = document.createElement("div");
    const taskIcon = document.createElement("div");
    const icon = document.createElement("span");

    task.className = "task";
    taskText.className = "task-text";
    taskIcon.className = "task-icon";
    icon.className = "icon icon-remove";

    taskText.innerText = completedTaskText;

    taskIcon.appendChild(icon);
    task.appendChild(taskText);
    task.appendChild(taskIcon);
    completedTaskList.insertBefore(task, btnAllTasksRemove);
}

function removeCompletedTaskUI(removeTask) {
    removeTask.remove();
}

function addTaskLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskLocalStorage(removeTask) {
    tasks.forEach(function(task, index) {
        if (task === removeTask) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addCompletedTaskLocalStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function removeCompletedTaskLocalStorage() {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
}

function showInfo(type = "", message = "", container = "", ref = "", timeout = "") {
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