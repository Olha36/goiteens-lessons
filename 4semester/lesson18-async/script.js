// const verseChoose = document.querySelector("select");
// const poemDisplay = document.querySelector("pre");

// const { logger } = require('prompt');

// async function updateDisplay(verse) {
//   verse = verse.replace(" ", "").toLowerCase();
//   const url = `task2-textFiles/${verse}.txt`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const text = await response.text();
//     poemDisplay.textContent = text;
//   } catch (error) {
//     poemDisplay.textContent = `Could not fetch verse: ${error}`;
//   }
// }

// verseChoose.addEventListener("change", () => {
//   const verse = verseChoose.value;
//   updateDisplay(verse);
// });
import * as exercise from './exercise.js';
console.log(exercise);

// function printDocuments() {
//   return new Promise((resolve) => {
//     console.log('Відправляємо документ на друк...'); //3
//     setTimeout(() => {
//       console.log('Друк виконується...'); //5
//       setTimeout(() => {
//         console.log('Документ надруковано!'); //6
//         resolve('Документ надруковано');
//       }, 5000);
//     }, 1000);
//   });
// }
// const test = async () => {};
// async function startPrinting() {
//   console.log('Починаємо друк'); //1
//   await printDocuments(); //2
//   console.log('Друк завершено'); //7
//   console.log('перевіряємо чергу');
//   console.log('перевіряємо чергу ще раз');
// }
// startPrinting();
// console.log('Продовжуємо роботу...'); //4
