const txtIdNumber = document.getElementById("txt-id-number");
const txtStaffName = document.getElementById("txt-staff-name");
const txtStaffSurname = document.getElementById("txt-staff-surname");
const btnAddStaff = document.getElementById("btn-add-staff");
const content = document.getElementById("content");
const containerListStaff = document.getElementById("container-list-staff");
const staffList = document.querySelector("#staff-list tbody");
const btnRemoveAllStaff = document.getElementById("btn-remove-all-staff");
const infoNoStaff = document.querySelector("#container-list-staff .info-danger");

eventListener();

function eventListener() {
    btnAddStaff.addEventListener("click", addStaff);
    document.addEventListener("DOMContentLoaded", getStaffList);
    staffList.addEventListener("click", removeStaff);
    btnRemoveAllStaff.addEventListener("click", removeAllStaff);
    //tools.js
    setInputFilter(txtIdNumber, function(value) {
        return /^\d*\.?\d*$/.test(value);
    });
}

function addStaff(e) {
    const id = txtIdNumber.value.trim();
    const name = txtStaffName.value.trim();
    const surname = txtStaffSurname.value.trim();

    if (id !== "" && name !== "" && surname !== "") {
        if (id.length === 11) {
            const newStaff = new Staff(id, name, surname);

            if (Storage.addStaffToStorage(newStaff)) {
                //Aynı kimlik numarasına sahip personel yok.
                UI.addStaffToUI(newStaff);
                UI.showNotification("success", "Personel kayıt işlemi başarılı.", content, containerListStaff, 1000);
                UI.componentStateChange(btnRemoveAllStaff, "block");
                UI.componentStateChange(infoNoStaff, "none");
            } else {
                //Hata Mesajı
                UI.showNotification("danger", "Aynı kimlik numarasına sahip personel var.", content, containerListStaff, 1500);
            }
        }else{
            UI.showNotification("danger", "TC Kimlik Numarası 11 haneden az olamaz.", content, containerListStaff, 1500);
        }

    } else {
        //Hata Mesajı
        UI.showNotification("danger", "Lütfen tüm alanları doldurun.", content, containerListStaff, 1000);
    }
    UI.clearInputs(txtIdNumber, txtStaffName, txtStaffSurname);
}

function getStaffList() {
    let staffs = Storage.getStaffsFromStorage();
    if (staffs !== null && staffs != "" && staffs != "[]") {
        staffs.forEach(function(staff) {
            UI.addStaffToUI(staff);
        });
        UI.componentStateChange(btnRemoveAllStaff, "block");
        UI.componentStateChange(infoNoStaff, "none");
    } else {
        //herhangi bir içerik yoksa
        UI.componentStateChange(btnRemoveAllStaff, "none");
        UI.componentStateChange(infoNoStaff, "flex");
    }
}

function removeStaff(e) {
    if (e.target.className === "icon icon-remove") {
        //arayüzden silme işlemi
        UI.removeStaffFromUI(e.target.parentElement.parentElement.parentElement);
        //Storage üzerinden silme
        Storage.removeStaffFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
        let staffs = Storage.getStaffsFromStorage();
        if (staffs == null || staffs == "" || staffs == "[]") {
            UI.componentStateChange(btnRemoveAllStaff, "none");
            UI.componentStateChange(infoNoStaff, "flex");
        }
    }
}

function removeAllStaff() {
    if (confirm("Silmek istediğinize emin misiniz?")) {
        //silme olacak
        const staffContainer = document.querySelector("#staff-list tbody");
        //UI üzerinde silme işlemi
        UI.removeAllStaffFromUI(staffContainer);
        UI.componentStateChange(btnRemoveAllStaff, "none");
        UI.componentStateChange(infoNoStaff, "flex");
        //Storage üzerinde silme işlemi
        Storage.removeAllStaffFromStorage("staffs");
    }
}