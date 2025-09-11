console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

//===== DOM ELEMENT SELECTION - THE FOUNDATION =====//

console.log(`=== DOM ELEMENT SELECTION ===`);

// Ranges and Defaults

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const bodyEl = document.body;
const messsageEl = document.querySelector(`.message`);
const numberEl = document.querySelector(`.number`);
const scoreEl = document.querySelector(`.score`);
const highscoreEl = document.querySelector(`.highscore`);
const guessInputEl = document.querySelector(`.guess`);
const checkBtnEl = document.querySelector(`.check`);
const againBtnEl = document.querySelector(`.again`);

//////////////////////////
// UI Helper
function setMessage(text) {
  messsageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessInputEl.value = '';
}

//////////////////////////////
// Game State & Reset;

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log(secretNumber);
}

function renderInitialUI() {
  setMessage(`Start Guessing...`);
  setNumber(`?`);
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground(``);
}

renderInitialUI();

checkBtnEl.addEventListener(`click`, function () {
  const guess = Number(guessInputEl.value);
  if (!guess) {
    return setMessage(`No number!`);
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`);
  }

  if (guess === secretNumber) {
    setMessage(`🎉 Correct Guess!`);
    setNumber(secretNumber);
    setBackground(`green`);
    if (score > highscore) {
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
  score--;
  setScore(score);

  if (score < 1) {
    setMessage(`💥 You lost!`);
    setNumber(secretNumber);
    setBackground(`red`);
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener(`click`, function () {
  resetGameState();
  renderInitialUI();
});

window.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter` && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener(`click`, function () {
  guessInputEl.focus();
});
