// Code your solutions in this file
function writeCards(array, event) {
    const value = []
    for (let i = 0; i < array.length; i++) {
        value.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return value 
}

function countDown(number) {
    while (number > 0 ) {
        console.log(number);
        number -= 1; 
    }
    console.log(number);
}