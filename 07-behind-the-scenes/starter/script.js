'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar);
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar);
}
// console.log(functionVar); 

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; // var ignores block scope
}

// console.log(blockVar); // Error: not accessible
// console.log(alsoBlockVar); // Error: not accessible
console.log(notBlockScoped); // Works! var leaks out

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, /* blockConst not here */functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name);
  }
  b();
}

a();


console.log(varX); 

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); 
// console.log(addArrow(2, 3)); 

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3)); 
console.log(addExpr(2, 3)); 
console.log(addArrow(2, 3)); 

const apiUrl = 'https://example.com';
console.log(apiUrl);

// console.log(title);
let title = 'Behind the Scenes';

function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label);
  }
  inner();
}
outer();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();