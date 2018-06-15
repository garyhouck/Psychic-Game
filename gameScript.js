// make an array of all available keyboard letters.
var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// define variables for keeping track of progress
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// computer randomly selects a letter and it's assigned to a variable

var correctLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
console.log(correctLetter);
// user inputs a letter
var userInput = "";
document.onkeyup = function(event) {
     userInput = userInput + event.key;
     console.log(userInput);

guessesSoFar = guessesSoFar + event.key; {
    console.log("you pressed " + guessesSoFar);
}
// loops through the array of all letters to see if true to random number variable
// if true add 1 to variable "wins"
if (userInput == correctLetter) {
    console.log("you win");
    ++wins;
    var winsLogged = document.getElementById("wins");
    var wins= document.createElement("p");
    winsLogged.appendChild(wins);
}
// if false goes to variable "guessesSoFar" THEN adds the letter to variable "guessesLeft"
else {
    console.log("wrong answer");
    --guessesLeft;
   
}


};






// if false 9 times add 1 to variable "losses"

// reset game - set "guessesSoFar" to 0 and pick new number