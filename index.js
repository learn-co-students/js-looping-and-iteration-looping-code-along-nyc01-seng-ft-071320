// Code your solutions in this file
function writeCards(array, event) {
    let sank =[]
    for (let i = 0; i < array.length; i++) {
        sank.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
      }
      return sank;
  }

  function countDown (number){
    while ( number > 0 ) {
        console.log( number );
        number--;
      }
      console.log( number);
  }