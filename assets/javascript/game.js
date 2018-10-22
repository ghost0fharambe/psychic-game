// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesSoFar = []
// Creating variables to hold the number of wins, losses. They start at 0.
var wins = 0;
var losses = 0;

// Set guess limit
var guessLimit = 13;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLimitText = document.getElementById("guess-limit");
var guessesText = document.getElementById("your-guesses");

winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessLimitText.textContent = "Guesses Left: " + guessLimit;

guessLimitText.textContent = "Guesses Left: " + guessLimit;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    computerChoiceText.textContent = ""
    // Determines which key was pressed.
    var userGuess = event.key;
    guessesSoFar.push(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesText.textContent = "Your guesses so far: " + guessesSoFar;

    if (userGuess === computerGuess) {
        wins++;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        guessLimit = 13;
        guessesText.textContent = "";
        guessesSoFar = [];
    }
    else {
        guessLimit--;
    };

    if (guessLimit === 0) {
        losses++;
        guessLimit = 13;
        guessesText.textContent = "";
        guessesSoFar = [];
    };

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessLimitText.textContent = "Guesses Left: " + guessLimit;

};