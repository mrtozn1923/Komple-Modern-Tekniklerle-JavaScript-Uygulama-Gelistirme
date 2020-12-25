class RandomStringArray{
    static generator(){
        let randomNumbers=[];
        let randomStringNumber=[];
        let randomNumber=0;
        let location=0;
        let location2=0;
        while(randomNumbers.length<6){
            randomNumber=Math.floor(Math.random()*3);
            location=randomNumbers.indexOf(randomNumber);
            location2=randomNumbers.indexOf(randomNumber,location+1);
            if(location===-1){
                randomNumbers.push(randomNumber);
            }else if(location2===-1){
                randomNumbers.push(randomNumber);
            }
        }
        randomNumbers.forEach(number=>{
            if(number===0){
                randomStringNumber.push("zero");
            }else if(number===1){
                randomStringNumber.push("one");
            }else if(number===2){
                randomStringNumber.push("two");
            }
        });
        return randomStringNumber;
    }
}