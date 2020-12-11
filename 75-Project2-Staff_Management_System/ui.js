class UI {

    static addStaffToUI(newStaff) {
        const staffList = document.querySelector("#staff-list tbody");
        staffList.innerHTML += `
    <tr class="staff">
        <td>${newStaff.idNumber}</td>
        <td>${newStaff.name}</td>
        <td>${newStaff.surname}</td>
            <td>
                <div><span class="icon icon-remove"></span></div>
            </td>
    </tr>
    `;
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

    static removeStaffFromUI(removeStaff) {
        removeStaff.remove();
    }
    static removeAllStaffFromUI(staffContainer) {
        staffContainer.innerHTML = "";
    }
    static componentStateChange(component, state) {
        component.style.display = state;
    }
}

// function UI(){

// }

// UI.prototype.addStaffToUI=function(newStaff){
//     const staffList=document.querySelector("#staff-list tbody");
//     staffList.innerHTML+=`
//     <tr class="staff">
//         <td>${newStaff.idNumber}</td>
//         <td>${newStaff.name}</td>
//         <td>${newStaff.surname}</td>
//             <td>
//                 <div><span class="icon icon-remove"></span></div>
//             </td>
//     </tr>
//     `;
// }
// UI.prototype.showNotification=function(type = "", message = "", container = "", ref = "", timeout = "") {
//     const info = document.createElement("div");
//     const infoIcon = document.createElement("div");
//     const icon = document.createElement("span");
//     const infoText = document.createElement("div");

//     info.className = `info info-${type}`;
//     infoIcon.className = "info-icon";
//     icon.className = "icon icon-info";
//     infoText.className = "info-text";

//     infoText.innerText = message;

//     infoIcon.appendChild(icon);
//     info.appendChild(infoIcon);
//     info.appendChild(infoText);
//     if (ref !== "") {
//         container.insertBefore(info, ref);
//     } else {
//         container.appendChild(info);
//     }
//     if (timeout !== "") {
//         setTimeout(function() {
//             info.remove();
//         }, timeout);
//     }
// }
// UI.prototype.clearInputs=function(...inputs){
//     inputs.forEach(function(element){
//         element.value="";
//     });
// }

// UI.prototype.removeStaffFromUI=function(removeStaff){
//     removeStaff.remove();
// }
// UI.prototype.removeAllStaffFromUI=function(staffContainer){
//     staffContainer.innerHTML="";
// }
// UI.prototype.componentStateChange=function(component,state){
//     component.style.display=state;
// }