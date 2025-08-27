console.log("Part 2: Functions ready!");

////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

function logger() {
  console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruits(num1, num2) {
  return `Juice with ${num1} apples and ${num2} oranges.`;
}

console.log(fruits(2, 5));

function greetStudent(studentName) {
  return `Hello ${studentName}, welcome to JavaScript!`
}

console.log(greetStudent("Mackenzie"));

function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}
console.log(addNumbers(2, 5));
console.log(multiplyNumbers(2, 45));

////////////////////////////////////
// Function Expressions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge(2005);
console.log(age1);

function calcAge2(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge2(2005, 2037);
const hisAge = calcAge2(2004, 2037);

console.log(`I am ${myAge} years old.`);
console.log(`He is ${hisAge} years old.`); 

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46));
console.log(introduce("Sarah"));

////////////////////////////////////
// Return Values and Scope

function calcAge3(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(2005, 'Mackenzie'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Global scope 
const globalVar = 'I am global';

function testScope() {
  const localVar = 'I am local';
  console.log(globalVar);
  console.log(localVar);  
}

testScope();
// console.log(localVar);
console.log(globalVar);

const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error - message is local to function


// Coding Challenge #1: Function Calculator

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win! (${avgDolphins} vs ${ avgKoalas})`;
  } else if(avgKoalas <= 2 * avgDolphins ) {
    return `Koalas win! (${avgDolphins} vs ${avgKoalas})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
  }
}

let scoreDolphins = calcAverage(44, 23, 71);        
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));