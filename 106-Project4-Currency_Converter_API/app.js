//Promise, Fetch yapısı ile döviz çeviri uygulaması
//https://collectapi.com/tr/api/economy/altin-doviz-ve-borsa-api/exchange
//Aylık 100 istek ile sınırlı olduğunu unutmayın.

const ui=new UI();
const currencyConverterAPI=new CurrencyConverterAPI("USD","TRY");

eventListeners();

function eventListeners(){
    ui.btnConvert.addEventListener("click",function(){
        let baseCurrency=ui.selectBaseCurrency.value;
        let targetCurrency=ui.selectTargetCurrency.value;
        let amount=ui.txtBaseCurrency.value;
        currencyConverterAPI.baseCurrency=baseCurrency;
        currencyConverterAPI.targetCurrency=targetCurrency;
        currencyConverterAPI.getConversionResult(amount)
        .then(result=>ui.showResult(result))
        .catch(error=>ui.info.innerText=error);
    });
}