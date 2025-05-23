// const arr = ['hello', 'world', 1, 2, 3, 4, 5, true];
// console.log(arr[4]);
// arr[1] = 'goiteens';

// console.log(arr[1]);
// console.log(arr.length);
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix[1][0]); // 4
// console.log(matrix[1][1]); // 5

// task 1
// let Arr1 = [1, 5, '4', "hello"];
// let Arr2 = [true,2, {}, ['a'], 222];

// console.log(Number(Arr1[2]) + Arr2[1]);

// 3
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i]);

// }
// for (let item of cart) {
//   total += item;
  
// }

// console.log(total);


let login = ['ivan', 'petro', 'sasha', 'vova'];
let user = 'goiteens';
let message = `Користувач ${user} не знайдено.`;

message = login.includes(user) ? `Користувач ${user} знайдено` : `Користувач ${user} не знайдено`

console.log(message);