// Code your solutions in this file


function writeCards(gifts) {
    let array = []
    for (let i = 0; i < gifts.length; i++) {
    array.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
    }
    return array
}


function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown= countDown -1);
    }
}
