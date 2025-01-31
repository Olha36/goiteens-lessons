// function multiply(a, b, c) {
//   return a * b * c;
// }

// console.log(multiply(2, 3, 4));
// console.log(multiply(30, 10, 1));

//example 1
// a, b, c це параметри
// const add = function(a, b, c) {
//  return a + b + c;
// };
// // 1, 2, 3 це аргументи
// const result = add(1, 2, 3);
// console.log(result); // 6
// console.log(result);
// console.log(result);
// console.log(result);
//  // 5, 10, 15 це аргументи
// console.log(add(5, 10, 15)); // 30

// //example 2
// console.log('Почав виконання [main]');

// const fnA = function() {
//   console.log('Почала виконуватися [fnA]');
//   fnB();
//   console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
// };

// const fnB = function() {
//   console.log('Виконується [fnB]');
//   fnC();
// };

// const fnC = function() {
//   console.log('Виконується [fnC]');
// }
// fnA();

// console.log('Продовжив виконуватися [main] після виходу з [fnA]');

//task1
// const withDraw = function(amount, balance) {
//   if(amount === 0) {
//     console.log('Enter amount more than 0');
//   } else if(amount > balance) {
//     console.log('not enough money');
//   } else {
//     console.log('success');
//   }
// }

// withDraw(0, 300);
// withDraw(500, 100);
// withDraw(500, 1000);

// const withDraw2 = function(amount, balance) {
//   if(amount === 0) {
//     console.log('Enter amount more than 0');
//     return;
//   }
//   if(amount > balance) {
//     console.log('not enough money');
//     return;
//   }
//   console.log('success');

// }

// withDraw2(0, 300);
// withDraw2(500, 200);
// withDraw2(200, 500)

// //example 3
// const count = function(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

// const fruits = [
//   {name: 'banana', quantity: 100, isFresh: true},
//   {name: 'apples', quantity: 150, isFresh: false},
//   {name: 'grapes', quantity: 200, isFresh: true},
//   {name: 'strawberry', quantity: 200, isFresh: true}
// ]

// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if(passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// }

// const freshFruit = filter(fruits, fruit => !fruit.isFresh);
// console.log(freshFruit);

// additional tasks

// function getAverage(arr) {
//   const sum = arr.reduce((acc, num) => acc + num, 0);
//   return sum / arr.length;
// }

// console.log(getAverage([1, 2, 3]));

// 2.
// function isEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(4));

//3
// function findMaxNumber(arr) {
//   let max = arr[0]; // Assume the first element is the largest

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // Update max if a bigger number is found
//     }
//   }

//   return max;
// }

// // Example usage:
// let array = [1, 3, 2, 5, 4];
// let max = findMaxNumber(array);
// console.log(max); // 5

//4
// function factorial(number) {
//   let result = 1;
//   for(let i = 2; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5)); // 120

// 3. Творчі завдання
// 1
// function hello(text) {
//   return text;
// }
// console.log(hello('Привіт JavaScript'))

//2
// function hello2(name) {
//   return `Hi, ${name}`;

// }
// console.log(hello2('Василь'));

//3
// function mul(n, m) {
//   return {
//     product: n * m,
//     sum: n + m,
//     difference: n - m
//   }
// }
// console.log(mul(2, 3));

// 4
function myAverageScore(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;

  if (average > 90 && average <= 100) {
    console.log("My average score is: A", average);
  } else if (average > 80 && average <= 90) {
    console.log("My average score: B", average);
  } else if (average > 70 && average <= 80) {
    console.log("My average score: C", average);
  } else {
    console.log("My average score: D", average);
  }
}
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
