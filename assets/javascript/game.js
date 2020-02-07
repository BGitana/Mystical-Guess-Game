alert("Script Tags Work?");

// console.log("Hello world!");

var wins = 0;
var losses = 0;
var yourGuesses = [];
var randomLetter = "";
var guessesMax = 10;

// user starts a new game
function newGame() {
  // document.getElementById("yourGuesses").reset ;
  document.getElementById("yourGuesses").innerHTML = `START`;
  // reset to empty
  yourGuesses = [];

  document.getElementById("guessesLeft").innerHTML = guessesMax;

  // document.getElementById("computerGuesses").reset();
  // document.getElementById("wins").reset();
  // document.getElementById("losses").reset();
  // document.getElementById("guessesLeft").reset();

  // the computer selects a new letter
  var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  // var computerGuesses  = []
  randomLetter =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(randomLetter);
}

newGame();

// user presses a button
document.onkeyup = function(event) {
  // get the key they pressed
  var yourGuess = event.key;
  // push letter in to myGuesses array and display
  yourGuesses.push(yourGuess);
  document.getElementById("yourGuesses").innerHTML = `${yourGuesses}`;

  compare(yourGuess, randomLetter);
};

// compare the key they pressed to the computer's selection
function compare(yourGuess, compGuess) {
  // If the letters are equal it's a win for the user
  // if (yourGuesses.length <= guessesMax){

  // }
  if (randomLetter === yourGuess) {
    wins++;
    document.getElementById("wins").innerHTML = `${wins}`;
    newGame();

    // Otherwise
  } else {
    if (yourGuesses.length < guessesMax) {
      // if you have guesses left
      // add the guess to the guesses the user already made

      document.getElementById("yourGuesses").innerHTML = `${yourGuesses}`;
      // update the number of guesses left
      document.getElementById("guessesLeft").innerHTML = `${guessesMax -
        yourGuesses.length}`;
      // user keeps guessing

      // otherwise
      // Game over
    } else {
      losses++;
      document.getElementById("losses").innerHTML = `${losses}`;

      // display sad face
      // document.getElementById("losses").innerHTML = `:-(`;
      newGame();
    }
  }
}
