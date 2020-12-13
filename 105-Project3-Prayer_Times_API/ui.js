function UI() {
    this.selectCities = document.getElementById("select-cities");
    this.btnGetTimes = document.getElementById("btn-get-times");
    this.info = document.getElementById("info");
    this.imsak = document.getElementById("imsak");
    this.gunes = document.getElementById("gunes");
    this.ogle = document.getElementById("ogle");
    this.ikindi = document.getElementById("ikindi");
    this.aksam = document.getElementById("aksam");
    this.yatsi = document.getElementById("yatsi");
}
UI.prototype.updatePrayerTimes = function(prayerTimes) {
    this.imsak.innerText = `${prayerTimes[0].saat}`;
    this.gunes.innerText = `${prayerTimes[1].saat}`;
    this.ogle.innerText = `${prayerTimes[2].saat}`;
    this.ikindi.innerText = `${prayerTimes[3].saat}`;
    this.aksam.innerText = `${prayerTimes[4].saat}`;
    this.yatsi.innerText = `${prayerTimes[5].saat}`;
}