// Code your solutions in this file
function writeCards(cards, occasion) {
    const messages = [];
    for (let i=0; i<cards.length; i++){
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
}

function countDown(start){
    let i = 0;
    while (i<=start){
        console.log(start - i);
        i++;
    }
}