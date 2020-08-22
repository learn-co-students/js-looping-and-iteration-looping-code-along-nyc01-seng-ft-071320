// Code your solutions in this file

function writeCards(names, event_names) {
   const thank_you = []
   for (var i = 0; i < names.length; i++) {
      thank_you.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
   }
   return thank_you;
}

function countDown(num) {
   
   while (num >= 0) {
      console.log(num)
      num--
   }
   
   
}

countDown(10)




