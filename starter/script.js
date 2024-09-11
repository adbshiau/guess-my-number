'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
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
    // if guess is greater than secret number
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    // nif guess is lower than secret number
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
