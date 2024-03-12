function startGame() {
    const numberDisplay = document.getElementById("questionSign");
    const numberInput = document.getElementById("numberInput");
    const checkBtn = document.getElementById("checkBtn");
    const attemptCount = document.getElementById("attemptCount");
    const againBtn = document.getElementById("againBtn");3
    const main = document.querySelector("main");

    let attempts = 1;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    let randomNumber = generateRandomNumber();

    checkBtn.addEventListener("click", function () {
        const guess = parseInt(numberInput.value);
        if (isNaN(guess) || guess < 1 || guess > 20) {
            alert("Please enter a number between 1 and 20.");
        } else {
            if (guess === randomNumber) {
                alert("Congratulations! You guessed the number.");
                numberDisplay.textContent = randomNumber;
                attempts = 1;
                attemptCount.textContent = attempts;
                main.classList.add('green-bg');
                randomNumber = generateRandomNumber();
            } else {
                attempts++;
                attemptCount.textContent = attempts;
                if (attempts > 20) {
                    alert("Game over! You've used all attempts.");
                    attempts = 1;
                    attemptCount.textContent = attempts;
                    randomNumber = generateRandomNumber();
                } else {
                    alert("Try again!");
                }
            }
        }
        numberInput.value = "";
    });

    againBtn.addEventListener("click", function () {
        attempts = 1;
        attemptCount.textContent = attempts;
        numberDisplay.textContent = "?";
        randomNumber = generateRandomNumber();
        main.classList.remove('green-bg');
    });
}

startGame(); 
