const ui = new UI();
let firstCard = "";
let secondCard = "";
let point = 0;
let firstPicture = "";
let secondPicture = "";
let cards = ui.getCards(RandomStringArray.generator());

eventListeners();

function eventListeners() {
    cards.forEach(card => {
        //span etiketine click olayı atama
        card.addEventListener("click", cardClick);
    });
}

function clearEventListeners() {
    cards.forEach(card => {
        //span etiketinden click olayı kaldırma
        card.removeEventListener("click", cardClick);
    });
}

function cardClick(e) {
    // console.log(e.target);
    clearEventListeners();
    if (firstCard === "") {
        //flip-card-inner(front+back) -->firstCard
        firstCard = e.target.parentElement.parentElement;
        ui.rotateBack(firstCard);
        setTimeout(() => {
            eventListeners();
        }, 800);
    } else if (firstCard !== "" && secondCard === "") {
        secondCard = e.target.parentElement.parentElement;
        ui.rotateBack(secondCard);
        firstPicture = firstCard.children[1].children[0];
        secondPicture = secondCard.children[1].children[0];
        if (firstPicture.src === secondPicture.src) {
            //eşleşme oldu

            //firstCard.parentElement-> flip-card
            match(firstCard.parentElement, secondCard.parentElement);
        } else {
            //eşleşme olmadı
            notMatch();
        }

    }
}

function match(_firstCard, _secondCard) {
    cards.splice(cards.indexOf(firstCard.children[0].children[0]), 1);
    cards.splice(cards.indexOf(secondCard.children[0].children[0]), 1);
    firstCard = "";
    secondCard = "";
    eventListeners();
    point += 30;
    setTimeout(() => {
        ui.point.innerText = point;
        //arayüzde görsel güncelleme yapılmalı
        ui.cardsMatch(firstPicture, secondPicture, _firstCard, _secondCard);
    }, 800);
}

function notMatch() {
    setTimeout(() => {
        ui.rotateFront(firstCard);
        ui.rotateFront(secondCard);
        firstCard = "";
        secondCard = "";
        eventListeners();
        point -= 5;
        setTimeout(() => {
            ui.point.innerText = point;
        }, 800);
    }, 1500);
}