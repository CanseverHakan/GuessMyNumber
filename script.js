'use strict';

function displayNumber() {
    document.querySelector('.number').style.visibility = 'hidden';
}
function visibleNumber() {
    document.querySelector('.number').style.visibility = 'visible';
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number Bro!'
    }
})

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;


document.querySelector('.number').textContent = secretNumber;
displayNumber('.message', '?');
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number Bro!';
        //When player Win
    } else if (guess === secretNumber) {
        visibleNumber('.message')
        document.querySelector('.message').textContent = 'Correct Number Broo!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High Broo!';
            score--;
            document.querySelector('.score').textContent = score;
            displayNumber('.message', 'none');
        } else {
            document.querySelector('.message').textContent = 'You lost Broo!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'orange';
        }
        //When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low Broo!';
            score--;
            document.querySelector('.score').textContent = score;
            displayNumber('.message', 'none');
        } else {
            document.querySelector('.message').textContent = 'You lost the game Noob!';
            document.querySelector('body').style.backgroundColor = 'orange'
            document.querySelector('.score').textContent = 0;
        }
    }
    //Reset


})

document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing Bro!';
    document.querySelector('.guess').value = '';
    displayNumber('.number')
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})
