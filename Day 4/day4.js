let number = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    for (let attempts = 0; attempts < 3; attempts++) {
        let guess = prompt(`Guess a number between 1 and 10. Attempt ${attempts + 1} of 3:`);
        if (guess == number) {
            alert("Congratulations! You guessed the right number!");
            return; // Termina el juego si el jugador adivina correctamente
        } else {
            alert("Sorry, that's not correct.");
        }
    }
    alert("Sorry. The number was " + number);
}