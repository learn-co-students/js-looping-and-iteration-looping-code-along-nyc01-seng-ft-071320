// Code your solutions in this file



function writeCards(name, event) {
    let thankYouCards = [];
    for (let i = 0 ; i < name.length; i++) { 
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
};

function countDown(start) {

    while (start > 0) {
        console.log(start);
        start -= 1;
    }
    console.log(start);
};