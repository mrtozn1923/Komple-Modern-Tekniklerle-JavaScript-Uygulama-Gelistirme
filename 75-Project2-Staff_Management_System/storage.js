class Storage {
    static getStaffsFromStorage() {
        let staffs;
        if (localStorage.getItem("staffs") !== null) {
            staffs = JSON.parse(localStorage.getItem("staffs"));
        } else {
            staffs = [];
        }
        return staffs;
    }

    static addStaffToStorage(newStaff) {
        let staffs = this.getStaffsFromStorage();
        if (staffs.some(function(staff) { return staff.idNumber == newStaff.idNumber })) {
            //Aynı kimlik numarasına sahip personel var.
            return false;
        } else {
            staffs.push(newStaff);
            localStorage.setItem("staffs", JSON.stringify(staffs));
            return true;
        }

    }
    static removeStaffFromStorage(removeStaffIdNumber) {
        let staffs = this.getStaffsFromStorage();
        staffs.forEach(function(staff, index) {
            if (staff.idNumber === removeStaffIdNumber) {
                staffs.splice(index, 1);
            }
        });
        localStorage.setItem("staffs", JSON.stringify(staffs));
    }
    static removeAllStaffFromStorage(key) {
        localStorage.removeItem(key);
    }
}
// function Storage() {

// }

// Storage.prototype.getStaffsFromStorage = function() {
//     let staffs;
//     if (localStorage.getItem("staffs") !== null) {
//         staffs = JSON.parse(localStorage.getItem("staffs"));
//     } else {
//         staffs = [];
//     }
//     return staffs;
// }

// Storage.prototype.addStaffToStorage = function(newStaff) {
//     let staffs = this.getStaffsFromStorage();
//     if (staffs.some(function(staff) { return staff.idNumber == newStaff.idNumber })) {
//         //Aynı kimlik numarasına sahip personel var.
//         return false;
//     } else {
//         staffs.push(newStaff);
//         localStorage.setItem("staffs", JSON.stringify(staffs));
//         return true;
//     }

// }
// Storage.prototype.removeStaffFromStorage=function(removeStaffIdNumber){
//     let staffs = this.getStaffsFromStorage();
//     staffs.forEach(function(staff,index){
//         if(staff.idNumber===removeStaffIdNumber){
//             staffs.splice(index,1);
//         }
//     });
//     localStorage.setItem("staffs",JSON.stringify(staffs));
// }
// Storage.prototype.removeAllStaffFromStorage=function(key){
//     localStorage.removeItem(key);
// }