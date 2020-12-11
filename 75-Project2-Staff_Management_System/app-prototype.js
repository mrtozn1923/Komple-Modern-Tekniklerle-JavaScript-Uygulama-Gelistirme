const txtIdNumber = document.getElementById("txt-id-number");
const txtStaffName = document.getElementById("txt-staff-name");
const txtStaffSurname = document.getElementById("txt-staff-surname");
const btnAddStaff = document.getElementById("btn-add-staff");
const content = document.getElementById("content");
const containerListStaff = document.getElementById("container-list-staff");
const staffList = document.querySelector("#staff-list tbody");
const btnRemoveAllStaff = document.getElementById("btn-remove-all-staff");
const infoNoStaff = document.querySelector("#container-list-staff .info-danger");

//UI Objesi
const ui = new UI();
//Storage Objesi
const storage = new Storage();

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

            if (storage.addStaffToStorage(newStaff)) {
                //Aynı kimlik numarasına sahip personel yok.
                ui.addStaffToUI(newStaff);
                ui.showNotification("success", "Personel kayıt işlemi başarılı.", content, containerListStaff, 1000);
                ui.componentStateChange(btnRemoveAllStaff, "block");
                ui.componentStateChange(infoNoStaff, "none");
            } else {
                //Hata Mesajı
                ui.showNotification("danger", "Aynı kimlik numarasına sahip personel var.", content, containerListStaff, 1500);
            }
        }else{
            ui.showNotification("danger", "TC Kimlik Numarası 11 haneden az olamaz.", content, containerListStaff, 1500);
        }

    } else {
        //Hata Mesajı
        ui.showNotification("danger", "Lütfen tüm alanları doldurun.", content, containerListStaff, 1000);
    }
    ui.clearInputs(txtIdNumber, txtStaffName, txtStaffSurname);
}

function getStaffList() {
    let staffs = storage.getStaffsFromStorage();
    if (staffs !== null && staffs != "" && staffs != "[]") {
        staffs.forEach(function(staff) {
            ui.addStaffToUI(staff);
        });
        ui.componentStateChange(btnRemoveAllStaff, "block");
        ui.componentStateChange(infoNoStaff, "none");
    } else {
        //herhangi bir içerik yoksa
        ui.componentStateChange(btnRemoveAllStaff, "none");
        ui.componentStateChange(infoNoStaff, "flex");
    }
}

function removeStaff(e) {
    if (e.target.className === "icon icon-remove") {
        //arayüzden silme işlemi
        ui.removeStaffFromUI(e.target.parentElement.parentElement.parentElement);
        //storage üzerinden silme
        storage.removeStaffFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
        let staffs = storage.getStaffsFromStorage();
        if (staffs == null || staffs == "" || staffs == "[]") {
            ui.componentStateChange(btnRemoveAllStaff, "none");
            ui.componentStateChange(infoNoStaff, "flex");
        }
    }
}

function removeAllStaff() {
    if (confirm("Silmek istediğinize emin misiniz?")) {
        //silme olacak
        const staffContainer = document.querySelector("#staff-list tbody");
        //ui üzerinde silme işlemi
        ui.removeAllStaffFromUI(staffContainer);
        ui.componentStateChange(btnRemoveAllStaff, "none");
        ui.componentStateChange(infoNoStaff, "flex");
        //storage üzerinde silme işlemi
        storage.removeAllStaffFromStorage("staffs");
    }
}