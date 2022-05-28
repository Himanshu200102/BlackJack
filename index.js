let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let message = " ";
let hasBlackjack = false;
let isAlive = true;
let afterClick = document.getElementById("message-El");
// let sumOfCards = document.getElementById("sum-El");
let sumOfCards = document.querySelector("#sum-El");
let cards = document.querySelector("#cards-el");

function start() {
    renderGame()
}

function renderGame() {
    console.log("start");
    sumOfCards.textContent = "Sum : " + sum
    cards.textContent = "Cards : " + firstCard + " " + secondCard
    if (sum <= 20) {
        message = "Want to pick another card?"
    } else if (sum === 21) {
        message = "Woohoo! you've got a blackjack!"
        hasBlackjack = true;
    } else {
        message = "You are out of the game"
        isAlive = false;
    }
    afterClick.textContent = message;
}

function newCard() {
    console.log("New card")
    let card = 8
    sum = sum + card
    renderGame()
}