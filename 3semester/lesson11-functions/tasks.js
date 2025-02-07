// const withDrawAccount = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Enter amount more than 0");
//     return;
//   } else if (amount > balance) {
//     console.log("Enter sum that does not exceed your balace");
//     return;
//   } else {
//     console.log("here are your money, wait a second");
//     return;
//   }
// };
// let example = withDrawAccount(0, 500);
// console.log(example);

// const sum = function (x, y) {
//   return x + y;
// };

//button був клік: вивести якесь повідомлення
// console.log(sum(2, 3));

// function name() {}
// const name2 = function ()  {}
// const name3 = () => {}

// function declaration
// 1. оголошення за допомогою ключового слова function
// 2. піднімається (всплиття) і доступне до оголошення
// 3. доступна глобально або в своїй області видимості
// 4. не має анонімності, завжди має імя
// console.log(name());

// function name() {
//     console.log('function declaration');

// }

// // function expression
// // 1. присвоюємо до змінної
// // 2. піднімається лише змінна
// // 3. доступна лише після оголошення
// // 4. може бути анонімна або іменована

// console.log(name2());
// const name2 = function ()  {
//     console.log('function expression');

// }

// hoisting

// function declaration
// function funcDeclation() {
//     return 'function declaration';

// }

// // func expression
// const funcExpression = function ()  {
//     return 'function expression';

// }
// console.log(typeof funcDeclation);
// console.log(typeof funcExpression);
// console.log(funcDeclation());
// console.log(funcExpression());

// function getAverage(arr) {
//   const sum = arr.reduce((acc, num) => acc + num, 0);
//   return (average = sum / arr.length);
// }
// console.log(getAverage([1, 2, 3]));

function factorial(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(5))