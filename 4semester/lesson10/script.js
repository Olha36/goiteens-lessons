//exxample 1
// console.log('hi');

// setTimeout(() => {
//   console.log('set time out function is running');
//   understandSetTimeOut()
// }, 2000)


// const understandSetTimeOut = () => {
//   setTimeout(() => {
//     console.log('set time out function 2 is running');
//   }, 4000)}
//example 2

// setTimeout(() => {
//   console.log('HI')
// }, 3000)

// const greet = () => {
//   console.log("Hi");
// }

// const timerId = setTimeout(greet, 3000); 
// clearTimeout(timerId);  


//example 3
// const checkFunction = () => {
//   console.log('set Interval is working');
// }

// const intervalId = setInterval(checkFunction, 2000);

// clearInterval(intervalId);

//example 4
// const button = document.querySelector("button");


// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
// };


// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);

//example 5
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;
// console.log(timerId);


// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });


//task 1
// let num = 0;

// let interval = setInterval(() => {
//   num += 1;
//   console.log(num);

//   document.write(num + '<br>');
  
//   if (num >= 1000) {
//     clearInterval(interval); // Stop the interval when num reaches 1000
//   }
// }, 1000);

//task 2
// const square = document.querySelector('.change-color');
// console.log(square);

// const changeColor = () => {
//  let colors = ['red', 'blue', 'green', 'pink', 'purple']

//  let index = 0;
// setInterval(() => {
//   square.style.backgroundColor = colors[index];

//   index = (index + 1) % colors.length;
// }, 3000)
 
// }
// changeColor()


//task 3
// Задані значення тексту
// const texts = ['Значення 1', 'Значення 2', 'Значення 3'];
// let currentIndex = 0;

// // Функція для зміни тексту
// function changeText() {
//     document.querySelector('.change-text').textContent = texts[currentIndex];
//     currentIndex = (currentIndex + 1) % texts.length;
// }

// // Встановлення інтервалу для зміни тексту кожні 2 секунди
// setInterval(changeText, 2000);
