var won = 0;
var lost = 0;
var attempts = 10;
var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"


ranLetter = letters[Math.floor(Math.random() * letters.length)];


function randomLetter() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];

}


document.onkeyup = function (event) {
      var playerGuess = event.key;

      
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            array = [];

      }
      randomLetter();
      if (playerGuess !== ranLetter) {
            attempts--;

      }
      if (attempts == 0) {
            lost++;
            array = []
            attempts = 10;
      }

    
      if (array.indexOf(playerGuess) >= 0) {
         } 
      else {
            array.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = array;

      }
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}