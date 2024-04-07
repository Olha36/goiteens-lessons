//example 1
// const numbers = [1, 2, 3, 4, 5, 6]; //[4, 5, 6]
// const filteredNumbers = [];


// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }


// console.log(filteredNumbers); 
// console.log(numbers);

// example 2
// const numbers = [1, 2, 3, 4, 5]; // [4, 5]
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });


// console.log(filteredNumbers); 
// console.log(numbers);

//example 3
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// }; 
// const numbers2 = [2, 4, 3, 4, 5];

// const doubledNumbers2 = dirtyMultiply(numbers2, 2);

// // Відбулася мутація вихідних Даних
// console.log(numbers2);
// console.log(doubledNumbers2);

// //example 4
// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }

//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// //[2, 4, 6, 4, 5]
// const doubledNumbers = pureMultiply(numbers, 2);

// // // Не сталося мутації вихідних даних
// console.log(numbers); // [1, 2, 3, 4, 5]

// // // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers);

//example 5
// const numbers = [1, 2, 3];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }


// // Функціональний forEach
// numbers.forEach(number => console.log(number));

// const fruits = ['kiwi', 'apples', 'bananas'];
// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit))

// // Вказуємо параметр idx якщо потрібен доступ до лічильника
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

//example 6 
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];


// //  ['Mango', Poly', 'Ajax']


// // Для кожного елемента колекції (user) повернемо значення поля name
// const names = users.map(user => user.isActive);

// console.log(names);

//example 7
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15];

//const num = [15]


// console.log(numbers.filter(num => num > 5)); 
// console.log(numbers.filter(num => num <= 5)); 
// console.log(numbers.filter(num => num === 5));
// console.log(numbers.filter(num => num === 15));

//example 8
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];
 // Використовуємо filter щоб пройти по базі даних users і вибрати активних і неактивних користувачів за значенням властивості isActive.

 //finish at the lesson

 //example 9 
//  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(numbers.find(num => num > 5)); // 6


// console.log(numbers.find(num => num < 5)); // 0


// console.log(numbers.find(num => num === 5)); // 5

// example 10
// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// //Використовуємо find щоб пройти по базі даних users і знайти користувача за ідентифікатором id. Ідентифікатори завжди унікальні.
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Створимо функцію яка буде повертати нам користувача по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

//example 11
// const isBigEnough = val => val >= 10;

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

//task 1
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const checkFilter = players.map((player) => player.name);
// console.log(checkFilter);

//Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const forEachMethod =players.forEach(player => {
  player.points *= 1.1; // збільшуємо кількість поінтів на 10%
});
console.log(players);


//Збільшити кількість годин гравця по id. Переписати на тернарник
const playerIdToUpdate = 'player-2'; // приклад id гравця, час якого потрібно збільшити

const updatedPlayers = players.map(player => {
  return player.id === playerIdToUpdate ? { ...player, timePlayed: player.timePlayed + 100 } : player;
});
console.log(updatedPlayers);

//Отримати масив всіх гравців онлайн
const onlinePlayers = players.filter(player => player.online);
console.log(onlinePlayers);

//Отримати масив всіх гравців офлайн
const offlinePlayers = players.filter(player => !player.online);
console.log(offlinePlayers);
// Отримати масив всіх хардкорних гравців з часом більше 250
const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.log(hardcorePlayers);
// Знайти гравця по id
// const playerIdToFind = 'player-3'; // Приклад id гравця, якого потрібно знайти
const foundPlayerById = players.find(player => player.id === 'player-3');
console.log(foundPlayerById);
// Знайти гравця по імені
const foundPlayerByName = players.find(player => player.name ==='Poly');
console.log(foundPlayerByName);

// Перевірити чи всі гравці мають час більше 200
const allPlayersHaveEnoughTime = players.every(player => player.timePlayed > 200);
console.log(allPlayersHaveEnoughTime);
// Перевірити чи всі гравці онлайн
const allPlayersAreOnline = players.every(player => player.online);
console.log(allPlayersAreOnline);

