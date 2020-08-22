
function writeCards(cards, event) {
  let output = []
  for (let i = 0; i < cards.length; i++){
    output.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }
  return output
}

function countDown(number) {
  let i=0
  while (i<=number) {
  console.log(number)
  number--
  }
}