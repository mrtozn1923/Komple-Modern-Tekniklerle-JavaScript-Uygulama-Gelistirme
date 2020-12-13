function PrayerTimesAPI(){
    this.apiKey="7J8hNxCKWdIQ4KcZReJvRj:7zX1lV2b3NVtZJGjKsmZHW";
    this.city="istanbul";
    this.xhttp=new XMLHttpRequest();
}

PrayerTimesAPI.prototype.getPrayerTimes=function(callback){

    const endPoint=`https://api.collectapi.com/pray/all?data.city=${this.city}`;
    this.xhttp.open("GET",endPoint);
    this.xhttp.onload=()=>{
        if(this.xhttp.status===200){
            const json=JSON.parse(this.xhttp.responseText);
            callback(null,json.result);
        }else{
            callback("Bir hata oluştu",null);
        }
    }
    this.xhttp.setRequestHeader("content-type","application/json");
    this.xhttp.setRequestHeader("authorization",`apikey ${this.apiKey}`);
    this.xhttp.send();

}