
const prayerTimesList=document.getElementById("prayer-times-list");

const xhtpp = new XMLHttpRequest();

    xhtpp.open("GET", "https://api.collectapi.com/pray/all?data.city=istanbul");

    xhtpp.setRequestHeader("content-type", "application/json");
    xhtpp.setRequestHeader("authorization", "apikey 7J8hNxCKWdIQ4KcZReJvRj:7zX1lV2b3NVtZJGjKsmZHW");

    xhtpp.send();

    xhtpp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let prayerTimes=JSON.parse(this.responseText);
                prayerTimes.result.forEach(function(element){
                    prayerTimesList.innerHTML+=`<li>${element.vakit} ${element.saat}</li>`;
                });
                
            }
        }
    }