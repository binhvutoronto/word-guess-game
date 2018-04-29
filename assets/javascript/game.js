//Confirm JS file connected
alert("Welcome to the Psychic Game! Prepare to have your mind blown!");

//Set Variables
//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;

//start game
startGame();


function startGame() {
	//generate random letter
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); //test in console
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//convert to alphanumeric key
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


			//invalid entry message
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			//prevent duplicate input
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");
            }
			//if CORRECT guess
			 else if (userChoice === computerChoice) {
				console.log("You win."); //test in console
				
                //display win message
                alert("You Win!")

                wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				resetGame();
            }
			//if INCORRECT guess
			 else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); //add input to array yourGuess

				console.log("Your guesses so far: " + yourGuess); //test in console

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft); //test in console

				noGuessesLeft();
			}
		}
	}

    //Reset game
    function resetGame() {
		guessesLeft = 9; //reset guess counter
		yourGuess = [];  //reset array
		document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
		document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
		startGame(); //restart the game with new computerChoice.

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE."); //test
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

        } 
        else {
			console.log("Incorrect. Try again"); //test
			checkIfCorrect();
		}

	}

}