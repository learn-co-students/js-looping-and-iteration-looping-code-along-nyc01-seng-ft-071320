// Code your solutions in this file
// function writeCards(arr, event) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("Thank you, " + name + ", " + "for the wonderful " + event + " gift!");
//     }
// }

// writeCards(["Ada", "Brendan", "Ali"], 'birthday');
   
// function countDown(num) {
//     let i = 0;
//     while(i < num) {
//         console.log(num - i);
//     }
//       i++;
// }

//  countDown(10);
//  countDown(4);

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }