class UI{
    constructor(){
        this.cardZero=document.getElementById("card-zero");
        this.cardZero=document.getElementById("card-zero");
        this.cardOne=document.getElementById("card-one");
        this.cardTwo=document.getElementById("card-two");
        this.cardThree=document.getElementById("card-three");
        this.cardFour=document.getElementById("card-four");
        this.cardFive=document.getElementById("card-five");
        this.point=document.getElementById("point");
        this.cardImages=document.querySelectorAll(".flip-card-back img");
    }
    rotateBack(element){
        element.style.transform="rotateY(180deg)"; 
    }
    rotateFront(element){
        element.style.transform="rotateY(0deg)"; 
    }
    getCards(pictureNames){
        this.cardImages.forEach((image,index)=>{
            image.src=`img/${pictureNames[index]}.svg`;
        });

        return [this.cardZero,this.cardOne,this.cardTwo,this.cardThree,this.cardFour,this.cardFive];
    }
    cardsMatch(firstPicture,secondPicture,firstCard,secondCard){
        firstPicture.style.filter="saturate(10%)";
        secondPicture.style.filter="saturate(10%)";
        firstCard.style.cursor="auto";
        secondCard.style.cursor="auto";
    }
}