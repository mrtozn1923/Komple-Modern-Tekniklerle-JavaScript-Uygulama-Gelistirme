class CurrencyConverterAPI {
    constructor(base, target) {
            this.apiKey = "7J8hNxCKWdIQ4KcZReJvRj:7zX1lV2b3NVtZJGjKsmZHW";
            this.url = "https://api.collectapi.com/economy/exchange?";
            this.baseCurrency = base;
            this.targetCurrency = target;
        }
        //result->data[0].calculatedstr->string dönecek
    getConversionResult(amount) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}int=${amount}&to=${this.targetCurrency}&base=${this.baseCurrency}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                        'authorization': `apikey ${this.apiKey}`
                    }
                })
                .then(response => response.json())
                .then(json => resolve(json.result.data[0].calculatedstr))
                .catch(error => reject(error));
        });

    }
}