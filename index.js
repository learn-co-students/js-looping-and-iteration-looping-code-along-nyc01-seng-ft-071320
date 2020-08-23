// Code your solutions in this file



let a = [ 'Lisa', 'Kaitlin', 'Jan' ]

let event = 'surprise' 

function writeCards(a, event) {
    let Array = []

    for (let i=0; i< a.length; i++){
        let message = `Thank you, ${a[i]}, for the wonderful ${event} gift!`;
        Array.push(message); 
    }
        return Array
    }

    function countDown(num) {
        while (num >= 0)
        console.log(num--)
    }

