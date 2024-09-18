'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if theres no input provided
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // if guess is the same as secret number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // if guess is greater than secret number
  } else if (guess > secretNumber) {
    // run if score is more than 1
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You have lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // if guess is lower than secret number
  } else if (guess < secretNumber) {
    // run if score is more than 1
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
