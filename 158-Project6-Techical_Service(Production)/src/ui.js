export class UI {
    constructor() {
        this.btnOpenFaultRecord = document.getElementById("btn-open-fault-record");
        this.btnListFaultRecord = document.getElementById("btn-list-fault-record");
        this.containerNewFaultRecord = document.getElementById("container-new-fault-record");
        this.containerFaultRecords = document.getElementById("container-fault-records");
        this.btnCreateFaultRecord = document.getElementById("btn-create-fault-record");
        this.inptCustomerName = document.getElementById("inpt-customer-name");
        this.inptCustomerPhoneNumber = document.getElementById("inpt-customer-phone-number");
        this.inptDeviceBrand = document.getElementById("inpt-device-brand");
        this.inptDeviceModel = document.getElementById("inpt-device-model");
        this.inptDeviceProblem = document.getElementById("inpt-device-problem");
        this.containerCustomerList = document.querySelector("#container-customer-list tbody");
        this.containerCustomerDeviceList=document.getElementById("container-customer-device-list");
    }
    changeDisplay(element, display) {
        element.style.display = display;
    }
    inputsClear(...inputs) {
        inputs.forEach(input => {
            input.value = "";
        });
    }
    addCustomerToUI(customers) {
        this.containerCustomerList.innerHTML="";
        customers.forEach(customer => {
            this.containerCustomerList.innerHTML += `
        <tr class="customer-info">
                            <td>${customer.id}</td>
                            <td>${customer.name}</td>
                            <td>${customer.phone}</td>
                        </tr>
        `;
        });
    }
    addDeviceToUI(devices){
        this.containerCustomerDeviceList.innerHTML=`<header>Müşteri Cihaz Listesi</header>`;
        devices.forEach(device=>{
            this.containerCustomerDeviceList.innerHTML+=`
            <div class="device">
            <table>
                <tr>
                    <td>Kayıt Nu:</td>
                    <td>${device.id}</td>
                </tr>
                <tr>
                    <td>Marka:</td>
                    <td>${device.brand}</td>
                </tr>
                <tr>
                    <td>Model:</td>
                    <td>${device.model}</td>
                </tr>
                <tr>
                    <td>Sorun:</td>
                    <td>${device.problem}</td>
                </tr>
                <tr>
                    <td>Açıklama:</td>
                    <td>${device.explain}</td>
                </tr>
                <tr>
                    <td>Durum:</td>
                    <td>${device.status}</td>
                </tr>
            </table>
            <div id="container-device-status">
                <button class="btn-ready-device">Cihaz Hazır</button>
                <button class="btn-not-ready-device">Cihaz Hazır Değil</button>
            </div>
            <button class="btn-remove-fault-record">Arıza Kaydını Sil</button>
        </div>
            `;
        });
    }
    removeDeviceToUI(device){
        device.remove();
    }
}