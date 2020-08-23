// Code your solutions in this file

const ppl = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise";

function writeCards(ppl, event) { 
    let newArr = []
    for (let i = 0; i < ppl.length; i++) {
        newArr.push(`Thank you, ${ppl[i]}, for the wonderful ${event} gift!`)
    };
    return newArr;
}


function countDown(posNum) {
    while (posNum > -1) {
        console.log(posNum--)
    }
}