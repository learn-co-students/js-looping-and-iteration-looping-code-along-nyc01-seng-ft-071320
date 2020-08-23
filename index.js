// Code your solutions in this file
function writeCards(names, message) {
  let namesArray = [];
  for (let i = 0; i < names.length; i++) {
    namesArray.push( `Thank you, ${names[i]}, for the wonderful ${message} gift!` );
  }
  return namesArray;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int)
    int -= 1
  }
}