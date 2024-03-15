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
const withDraw = function(amount, balance) {
  if(amount === 0) {
    console.log('Enter amount more than 0');
  } else if(amount > balance) {
    console.log('not enough money');
  } else {
    console.log('success');
  }
}

withDraw(0, 300);
withDraw(500, 100);
withDraw(500, 1000);


const withDraw2 = function(amount, balance) {
  if(amount === 0) {
    console.log('Enter amount more than 0');
    return;
  } 
  if(amount > balance) {
    console.log('not enough money');
    return;
  } 
  console.log('success');
  
}

withDraw2(0, 300);
withDraw2(500, 200);
withDraw2(200, 500)

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
