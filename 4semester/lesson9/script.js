//example 1
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings);


//example 2
// const input = document.querySelector('.example2');
// const button = document.querySelector('.button');

// button.addEventListener('click', function() {
//   localStorage.info = input.value;
// })

// document.write(localStorage.info)

//task1
// function addToLocalStorage(key, object) {
//   // Перетворюємо об'єкт у рядок перед збереженням
//   const objectString = JSON.stringify(object);
  
//   // Зберігаємо об'єкт у localStorage
//   localStorage.setItem(key, objectString);
// }

// // Функція для отримання об'єкта з localStorage за ключем
// function getFromLocalStorage(key) {
//   // Отримуємо рядок з localStorage за ключем
//   const objectString = localStorage.getItem(key);
  
//   // Перетворюємо рядок у об'єкт
//   const object = JSON.parse(objectString);
  
//   // Повертаємо отриманий об'єкт
//   return object;
// }

// // Приклад використання
// const key = 'exampleKey';
// const object = { name: 'John', age: 30 };

// // Додаємо об'єкт до localStorage
// addToLocalStorage(key, object);

// // Отримуємо об'єкт з localStorage за ключем і виводимо його в консоль
// console.log(getFromLocalStorage(key));

// function getFromLocalStorage(key) {
//   // Отримуємо значення з localStorage за ключем
//   const value = localStorage.getItem(key);
  
//   // Перевіряємо, чи значення існує
//   if (value === null) {
//       // Якщо значення не знайдено, повертаємо null або можемо виконати інші дії за необхідності
//       return null;
//   }
  
//   // Перетворюємо рядок у об'єкт і повертаємо його
//   return JSON.parse(value);
// }

// // Приклад використання
// const key = 'exampleKey';

// // Отримуємо значення з localStorage за ключем і виводимо його в консоль
// console.log(getFromLocalStorage(key));

//task 3
// function removeFromLocalStorage(key) {
//   // Видаляємо значення з localStorage за ключем
//   localStorage.removeItem(key);
// }

// // Приклад використання
// const key = 'exampleKey';

// // Видаляємо значення з localStorage за ключем
// removeFromLocalStorage(key);

//task 4
// function clearLocalStorage() {
//   // Очищуємо весь localStorage
//   localStorage.clear();
// }

// // Приклад використання
// clearLocalStorage();


//task 5
// function countLocalStorageElements() {
//   return Object.keys(localStorage).length;
// }
// console.log(countLocalStorageElements())

//task 6
localStorage.setItem("key1", "value1");
localStorage.setItem("key2", "value2");

// function arrKeys() {
//   let count = 0;

//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     if(key !== null) {
//       count++
//     }
//   }

//   return count;
// }
// console.log(arrKeys());


//task 7
// function checkObject(key) {
//   return localStorage.getItem(key) !== null;
// }
// console.log(checkObject('key1'));


//task 8
// function checkObject(value) {
//   return localStorage.getItem(value) !== null;
// }
// console.log(checkObject('Somevalue1'));

//task 9
// function addToLocalStorageArray(key, value) {
//   // Retrieve existing array from localStorage
//   let existingArray = JSON.parse(localStorage.getItem(key)) || [];

//   // Add the new value to the array
//   existingArray.push(value);

//   // Convert the array back to JSON string and save to localStorage
//   localStorage.setItem(key, JSON.stringify(existingArray));
// }
// console.log(JSON.parse(localStorage.getItem('myArray')));

//task 10
// function removeFromLocalStorageArray(key) {
//   // Retrieve existing array from localStorage
//   let existingArray = JSON.parse(localStorage.getItem(key)) || [];

//   // Remove the last element from the array
//   existingArray.pop();

//   // Convert the modified array back to JSON string and save to localStorage
//   localStorage.setItem(key, JSON.stringify(existingArray));
// }
// removeFromLocalStorageArray('myArray');
// console.log(JSON.parse(localStorage.getItem('myArray')));


