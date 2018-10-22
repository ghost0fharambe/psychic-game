 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

 guessLimitText.textContent = "Guesses Left: " + guessLimit;
 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   // Randomly chooses a choice from the options array. This is the Computer's guess.
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   // Reworked our code from last step to use "else if" instead of lots of if statements.

   // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//      if ((userGuess === "r") && (computerGuess === "s")) {
//        wins++;
//      } else if ((userGuess === "r") && (computerGuess === "p")) {
//        losses++;
//      } else if ((userGuess === "s") && (computerGuess === "r")) {
//        losses++;
//      } else if ((userGuess === "s") && (computerGuess === "p")) {
//        wins++;
//      } else if ((userGuess === "p") && (computerGuess === "r")) {
//        wins++;
//      } else if ((userGuess === "p") && (computerGuess === "s")) {
//        losses++;
//      } else if (userGuess === computerGuess) {
//        ties++;
//      }

//for (var i = 0; i < computerChoices.length; i++) {

    if (userGuess === computerGuess) {
        wins++;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        guessLimit = 13;
    }
    else {
        guessLimit--;
    };

if (guessLimit === 0) {
 losses++;
 guessLimit = 13;
};

     // Hide the directions
     directionsText.textContent = "";

     // Display the user and computer guesses, and wins/losses/ties.
     userChoiceText.textContent = "You chose: " + userGuess;
     
     winsText.textContent = "wins: " + wins;
     lossesText.textContent = "losses: " + losses;
     guessLimitText.textContent = "Guesses Left: " + guessLimit;
    };