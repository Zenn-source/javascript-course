'use strict';

console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

//===== DOM ELEMENT SELECTION - THE FOUNDATION =====//

console.log(`=== DOM ELEMENT SELECTION ===`);

// const messsageEl = document.querySelector(`.message`);
// const scoreEl = document.querySelector(`.score`);
// const guessEl = document.querySelector(`.guess`);
// const numberEl = document.querySelector(`.number`);
// const highscoreEl = document.querySelector(`.highscore`);

// numberEl.textContent = 15;
// guessEl.value = 10;

// console.log(messsageEl);
// console.log(messsageEl.textContent);
// console.log(`Score element: ${scoreEl}`);
// console.log(`Current Highscore: ${highscoreEl.textContent}`);
// console.log(`Guess input value: ${guessEl.value}`);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game State Initialized`);

// Exercise Pracctice Game State
// playerName, attemps, gameActive

let playerName = `Mackenzie`;
let attemps = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log(`Player: ${playerName}`);
console.log(`Attemps: ${attemps}`);
console.log(`Game active: ${gameActive}`);
console.log(`Easy secret number: ${easySecret}`);

// Section 3: Basic Game Logic Implementation

document.querySelector(`.check`).addEventListener('click', function () {
  //   console.log(`Check button clicked!`);

  const guess = Number(document.querySelector(`.guess`).value);
  const message = document.querySelector(`.message`);
  const number = document.querySelector(`.number`);

  //   console.log(`Player guessed ${guess}`);

  if (guess === secretNumber) {
    console.log(`Correct guess!!`);
    message.textContent = 'Correct Answer!!!';
    number.textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log(`Too High`);
    message.textContent = 'Too High!';
  } else if (guess < secretNumber) {
    console.log(`Too Low`);
    message.textContent = 'Too Low!';
  }
});