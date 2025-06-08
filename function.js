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
console.log(winner(ncp, mango)); // m
// 
// 
// consango is greater than ncp
const numbers = [1, 2, 3, 4, 5];

function sumArrayAndEvenOdd(arr) {
    const evenAray = [];
    const oddArray = [];
    let sum = 0;
    for(const num of numbers)
    {
        if (num % 2 === 0) {
            evenAray.push(num);
        } else {
            oddArray.push(num);
        }
        sum += num;
    }
    return {
        evenAray,
        oddArray,
        sum
    };
}

console.log(sumArrayAndEvenOdd(numbers)); // { evenAray: [ 2, 4 ], oddArray: [ 1, 3, 5 ], sum: 15 }

// file name
const result  = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.evenAray.push(num);
    } else {
        acc.oddArray.push(num);
    }
    acc.sum += num;
    return acc;
}, { evenAray: [], oddArray: [], sum: 0 });