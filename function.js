///Why Functions --
// what is inside a function?
// parameters, arguments, return values
// Calling a function //Invoking a function
// Function Expression
// Function Declaration
// Function Scope
// Function Hoisting
// clousure
// Arrow Functions
// IIFE (Immediately Invoked Function Expression)
// EXAMPLE OF IFFE

const sum = function (a = 5, b = 10) {
  return a - b;
};

console.log(sum(5, 10)); // 15
console.log(sum(5, 15)); // 15
console.log(sum(5, 20)); // 15

console.log(sum()); // 15

//
let ncp = 10;
let mango = 100;

function winner(ncp, mango) {
  if (ncp > mango) {
    return "ncp is greater than mango";
  } else if (mango > ncp) {
    return "mango is greater than ncp";
  }
}
console.log(winner(ncp, mango)); // mango is greater than ncp