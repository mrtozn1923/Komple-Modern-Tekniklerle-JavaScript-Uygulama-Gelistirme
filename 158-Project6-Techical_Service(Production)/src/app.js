import { Request } from "./request";
import { UI } from "./ui"
import { Customer } from "./customer"
import { Device } from "./device"
const ui = new UI();

const requestCustomers = new Request("http://localhost:3000/customers");
const requestDevices = new Request("http://localhost:3000/devices");
let deviceId = null;
let deviceList = null;
let tempDevice = new Device();

eventListeners();

function eventListeners() {
    ui.btnOpenFaultRecord.addEventListener("click", function() {
        ui.changeDisplay(ui.containerFaultRecords, "none");
        ui.changeDisplay(ui.containerNewFaultRecord, "block");
    });
    ui.btnListFaultRecord.addEventListener("click", function() {
        ui.changeDisplay(ui.containerFaultRecords, "block");
        ui.changeDisplay(ui.containerNewFaultRecord, "none");
        getCustomerList();
    });
    ui.btnCreateFaultRecord.addEventListener("click", createFaultRecord);
    ui.containerCustomerList.addEventListener("click", function(e) {
        //e.target.parentElement.lastElementChild.innerText->phoneNumber
        getDeviceList(e.target.parentElement.lastElementChild.innerText);
    });
    ui.containerCustomerDeviceList.addEventListener("click", function(e) {

        if (e.target.className === "btn-ready-device") {
            deviceId = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.lastElementChild.innerText;

            updateDeviceStatus(deviceId, "Hazır");

        } else if (e.target.className === "btn-not-ready-device") {
            deviceId = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.lastElementChild.innerText;

            updateDeviceStatus(deviceId, "Hazır değil");

        } else if (e.target.className === "btn-remove-fault-record") {
            deviceId = e.target.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.lastElementChild.innerText;

            removeDeviceFaultRecord(deviceId, e.target.parentElement);
        }
    });
}

function createFaultRecord() {

    let customerName = ui.inptCustomerName.value.trim();
    let customerPhoneNumber = ui.inptCustomerPhoneNumber.value.trim();
    let deviceBrand = ui.inptDeviceBrand.value.trim();
    let deviceModel = ui.inptDeviceModel.value.trim();
    let deviceProblem = ui.inptDeviceProblem.value.trim();

    if (customerName !== "" && customerPhoneNumber !== "" && deviceBrand !== "" & deviceModel !== "" && deviceProblem !== "") {
        let device = new Device(customerPhoneNumber, deviceBrand, deviceModel, deviceProblem);
        let customer = new Customer(customerName, customerPhoneNumber);

        //müşteri ekleme
        controlCustomer(customerPhoneNumber, function(result) {
            if (result === true) {
                //müşteri var eklemeye gerek yok
                //cihaz ekleme
                requestDevices.post({ customerPhone: `${device.customerPhone}`, brand: `${device.brand}`, model: `${device.model}`, problem: `${device.problem}`, explain: `${device.explain}`, status: `${device.status}` }).then(device => {
                    if (device !== null) {
                        alert("Kayıt işlemi başarılı");
                    }
                }).catch(error=>{
                    if(error!=null){
                        alert("Bir hata oluştu.");
                    }
                });

                ui.inputsClear(ui.inptCustomerName, ui.inptCustomerPhoneNumber, ui.inptDeviceBrand, ui.inptDeviceModel, ui.inptDeviceProblem);
            } else if (result === false) {
                requestCustomers.post({ name: `${customer.name}`, phone: `${customer.phoneNumber}` }).then(customer => {
                    if (customer !== null) {
                        //cihaz ekleme
                        requestDevices.post({ customerPhone: `${device.customerPhone}`, brand: `${device.brand}`, model: `${device.model}`, problem: `${device.problem}`, explain: `${device.explain}`, status: `${device.status}` }).then(device => {
                            if (device !== null) {
                                alert("Kayıt işlemi başarılı");
                                ui.inputsClear(ui.inptCustomerName, ui.inptCustomerPhoneNumber, ui.inptDeviceBrand, ui.inptDeviceModel, ui.inptDeviceProblem);
                            }
                        }).catch(error=>{
                            if(error!=null){
                                alert("Bir hata oluştu.");
                            }
                        });
                    }
                }).catch(error=>{
                    if(error!=null){
                        alert("Bir hata oluştu.");
                    }
                });
            } else {
                alert("Bir hata oluştu.");
            }
        });
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
}
function getCustomerList() {
    requestCustomers.get()
        .then(customers => {
            ui.addCustomerToUI(customers);
            getDeviceList(customers[0].phone);
        })
        .catch(error=>{
            if(error!=null){
                alert("Müşteri listesi alınırken hata oluştu.");
            }
        });
}
function getDeviceList(customerPhoneNumber) {
    requestDevices.get("?customerPhone=" + customerPhoneNumber)
        .then(devices => {
            ui.addDeviceToUI(devices);
            deviceList = devices;
        })
        .catch(error=>{
            if(error!=null){
                alert("Cihaz listesi alınırken hata oluştu.");
            }
        });
}

function updateDeviceStatus(deviceId, status) {
    deviceList.forEach(device => {
        if (device.id == deviceId) {
            tempDevice.id = device.id;
            tempDevice.customerPhone = device.customerPhone;
            tempDevice.brand = device.brand;
            tempDevice.model = device.model;
            tempDevice.problem = device.problem;
            tempDevice.explain = device.explain;
            tempDevice.status = status;
        }
    });
    requestDevices.put(deviceId, tempDevice.getJSONObject())
        .then(device => {
            if (device.id !== null) {
                //işlem başarılı
                getDeviceList(device.customerPhone);
            }
        })
        .catch(error=>{
            if(error!=null)
            alert("Durum güncellemesi başarılı olamadı.");
        });
}

function removeDeviceFaultRecord(deviceId, device) {
    requestDevices.delete(deviceId)
        .then(result => {
            if (result) {
                //silme işlemi başarılı
                ui.removeDeviceToUI(device);
            }
        })
        .catch(error=>{
            if(error!=null)
            alert("Cihaz silme işlemi başarılı olamadı.");
        });
}

function controlCustomer(phoneNumber, callback) {
    let result = "";
    requestCustomers.get()
        .then(customers => {
            customers.forEach(customer => {
                if (customer.phone == phoneNumber) {
                    result = true;
                    //müşteri var
                } else {
                    result = false;
                    //müşteri yok
                }
            });
            callback(result);
        })
        .catch(error => {
            if(error!=null)
            {callback("Hata oluştu");}            
        });
}