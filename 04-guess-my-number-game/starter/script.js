'use strict';

console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

//===== DOM ELEMENT SELECTION - THE FOUNDATION =====//

console.log(`=== DOM ELEMENT SELECTION ===`);


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

// Section 3: Basic Game Logic Implementation

document.querySelector(`.check`).addEventListener(`click`, function () {
  console.log(`Check button clicked!`);

  const guess = Number(document.querySelector(`.guess`).value);
  console.log(`Player guessed:`, guess);

 if (!guess) {
   document.querySelector(`.message`).textContent = `No number`;
   return;
 }

 if (guess < 1 || guess > 20) {
   document.querySelector(
     `.message`
   ).textContent = `Number must be between 1 and 20`;
   return;
 }

  if (guess === secretNumber) {
    console.log(`Correct guess!`);
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.message`).textContent = '🎉 Game Over!!';
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }

    document.body.style.backgroundColor = `green`;
  } else if (guess > secretNumber) {
    console.log(`Too high!`);
    document.querySelector(`.message`).textContent = `Too high`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = '💀 Game Over!';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = `red`;
    }
  } else if (guess < secretNumber) {
    console.log(`Too low`);
    document.querySelector(`.message`).textContent = `Too low`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = '💀 Game Over!';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = `red`;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  console.log(`Again button is working`);

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing ...`;
  console.log("Your new secret number after restart: ", secretNumber);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.body.style.backgroundColor = ``;
  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
});