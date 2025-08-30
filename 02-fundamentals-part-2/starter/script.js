// console.log("Part 2: Functions ready!");

// ////////////////////////////////////
// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// function logger() {
//   console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruits(num1, num2) {
//   return `Juice with ${num1} apples and ${num2} oranges.`;
// }

// console.log(fruits(2, 5));

// function greetStudent(studentName) {
//   return `Hello ${studentName}, welcome to JavaScript!`
// }

// console.log(greetStudent("Mackenzie"));

// function addNumbers(a, b) {
//   return a + b;
// }

// function multiplyNumbers(a, b) {
//   return a * b;
// }
// console.log(addNumbers(2, 5));
// console.log(multiplyNumbers(2, 45));

// ////////////////////////////////////
// // Function Expressions

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge(2005);
// console.log(age1);

// function calcAge2(birthYear, currentYear) {
//   const age = currentYear - birthYear;
//   return age;
// }

// const myAge = calcAge2(2005, 2037);
// const hisAge = calcAge2(2004, 2037);

// console.log(`I am ${myAge} years old.`);
// console.log(`He is ${hisAge} years old.`); 

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah"));

// ////////////////////////////////////
// // Return Values and Scope

// function calcAge3(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2005, 'Mackenzie'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// // Global scope 
// const globalVar = 'I am global';

// function testScope() {
//   const localVar = 'I am local';
//   console.log(globalVar);
//   console.log(localVar);  
// }

// testScope();
// // console.log(localVar);
// console.log(globalVar);

// const userName = "Jonas"; // Global

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`; // Local to function
//   const timestamp = new Date().toLocaleTimeString(); // Local to function

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));
// // console.log(message); // Error - message is local to function


// // Coding Challenge #1: Function Calculator

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win! (${avgDolphins} vs ${ avgKoalas})`;
//   } else if(avgKoalas <= 2 * avgDolphins ) {
//     return `Koalas win! (${avgDolphins} vs ${avgKoalas})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }
// }

// let scoreDolphins = calcAverage(44, 23, 71);        
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


////////////////////////////////////
// Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// // 
// friends[1] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(2005), calcAge(1991), calcAge(2001)];
// console.log(ages);

// ////////////////////////////////////
// // Array Methods - Adding Elements

// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// const popped = friends.pop();
// console.log(popped); 
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("John"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// ////////////////////////////////////
// // Array Iteration - Loops


// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });


// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++ ) {
//   total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades.length} students passed.`);

// Coding Challenge #2: Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }


// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////
// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); // What is this? firstName?
// console.log(jonasArray[1]); // lastName?
// console.log(jonasArray[2]);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job); 
// console.log(jonas.friends); 

// console.log(jonas["firstName"]); 
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// // Use arrays for ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Use Objects for named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1991)); 
// console.log(jonas.calcAge(jonas.birthYear)); 

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Mackenzie",
//   lastName: "Iguiron",
//   birthYear: 2005,
//   location: "New York",
//   interests: ["gaming", "music", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function () {
//     this.calcAge();
//     return `
//     ${this.firstName} ${this.lastName}, ${this.age} years old
//     Location: ${this.location}
//     Status: ${this.isActive ? "Online" : "Offline"}
//     Friends: ${this.friends.length} total, ${this.getActiveFriends()} active
//     Interests: ${this.interests.join(", ")}
//     `;
//   },
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length);

////////////////////////////////////
// Modifying Element Content

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// message.innerHTML = "<strong>Bold text from JS!</strong>";

// console.log(message.innerText);

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

////////////////////////////////////
// Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Game State Object
const gameState = {
  scores: [0, 0],
  winningScore: 5,
  isGameOver: false,

  addPoint: function (playerIndex) {
    if (!this.isGameOver) {
      this.scores[playerIndex]++;
      this.updateScoreDisplay(playerIndex);

      if (this.scores[playerIndex] >= this.winningScore) {
        this.showWinner(playerIndex);
      }
    }
  },

  updateScoreDisplay: function (playerIndex) {
    document.querySelector(`#score-${playerIndex + 1}`).textContent =
      this.scores[playerIndex];
  },


  showWinner: function (playerIndex) {
    this.isGameOver = true;
    const winnerName = `Player ${playerIndex + 1}`;
    document.querySelector(".winner-name").textContent = winnerName;

    document.querySelector(".winner").classList.remove("hidden");
    document.querySelector(".status").classList.add("hidden");
  },

  resetGame: function () {
    this.scores = [0, 0];
    this.isGameOver = false;

    document.querySelectorAll(".score").forEach((el) => (el.textContent = 0));
    document.querySelector(".winner").classList.add("hidden");
    document.querySelector(".status").classList.remove("hidden");
  },
};

document.querySelectorAll(".btn-add").forEach((btn) => {
  btn.addEventListener("click", function () {
    const playerIndex = this.dataset.player - 1;
    gameState.addPoint(playerIndex);
  });
});

document.querySelector("#btn-reset").addEventListener("click", function () {
  gameState.resetGame();
});

document.querySelector("#winning-score").addEventListener("change", function () {
  gameState.winningScore = parseInt(this.value);
  document.querySelector(".target").textContent = this.value;
  gameState.resetGame();
});
