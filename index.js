// Code your solutions in this file
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(name, event) {
  const thankfulArray = []
  for (let i = 0; i < name.length; i++) {
    thankfulArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return thankfulArray;
}

function countDown(integer) {
  let i = integer;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}