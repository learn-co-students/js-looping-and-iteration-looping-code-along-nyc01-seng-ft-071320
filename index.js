// Code your solutions in this file
let arrayOfCards = []

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        arrayOfCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return arrayOfCards;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}
