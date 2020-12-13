const prayerTimesAPI = new PrayerTimesAPI();
const ui = new UI();

eventListeners();

function eventListeners() {

    let city = "istanbul";
    window.onload = function() {
        getPrayerTimes(city);
    }
    ui.selectCities.onchange = function() {
        city = this.value;
    }
    ui.btnGetTimes.onclick = function() {
        getPrayerTimes(city);
    }
}

function getPrayerTimes(city) {
    info.innerText = "Yükleniyor...";
    ui.btnGetTimes.setAttribute("disabled", "disabled");
    prayerTimesAPI.city = city;
    prayerTimesAPI.getPrayerTimes(function(err, response) {
        if (response !== null) {
            //işlem başarılı
            ui.updatePrayerTimes(response);
            ui.info.innerText = "";
            ui.btnGetTimes.removeAttribute("disabled");
        } else {
            //hata
            ui.info.innerText = err;
        }
    });
}