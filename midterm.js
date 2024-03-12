// Task 1  Developer Skills & Editor Setup
function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]}ºC in ${i + 1} days ...`);
    }
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];


console.log("Data 1:");
printForecast(data1);


console.log("Data 2:");
printForecast(data2);


// Task 2  Game functionality
document.addEventListener("DOMContentLoaded", function() {
    const againButton = document.querySelector('.again');

    againButton.addEventListener('click', function() {

        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
    });
});

