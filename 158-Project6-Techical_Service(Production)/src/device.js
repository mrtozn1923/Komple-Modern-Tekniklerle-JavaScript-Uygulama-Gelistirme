export class Device {
    constructor(_customerPhone=null, _brand=null, _model=null, _problem=null) {
        this.id = null;
        this.customerPhone = _customerPhone;
        this.brand = _brand;
        this.model = _model;
        this.problem = _problem;
        this.explain = "Sorun araştırılıyor.";
        this.status = "Hazır değil";
    }
    getJSONObject(){
        return {
            customerPhone:this.customerPhone,
            brand:this.brand,
            model:this.model,
            problem:this.problem,
            explain:this.explain,
            status:this.status
        };
    }
}