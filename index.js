// Code your solutions in this file

// const names = ["Ada", "Brendan", "Ali"]
// const event = "birthday"


function writeCards(namesArray, event) {
    let messages = []
    for (
        let i = 0;
        i < namesArray.length;
        i++) {
            messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
        }
        console.log(messages)
}


function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }
