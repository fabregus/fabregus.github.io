'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const initialScore = 20;
let score = initialScore;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body'). style.backgroundColor = '#60b347'
        document.querySelector('.number'). style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Number too high!' : 'Number too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function() {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = initialScore;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body'). style.backgroundColor = '#222';
    document.querySelector('.number'). style.width = '15rem';
    return secretNumber;
});