// setInterval(() => {
//   console.log('This example run in 2 seconds');
// }, 2000)
// console.log('Example 1');

// console.log('Example 2');

// console.log('Example 3');

// console.log('Example 5');
// console.log('example 6');
//example 3
// const checkFunction = () => {
//   console.log('set Interval is working');
// }

// const intervalId = setInterval(checkFunction, 2000);

// clearInterval(intervalId)

//example 4
// const button = document.querySelector("button");

// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
//   console.log('Synchronous code');
// };


// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);

//example 5
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId = null;
// // console.log(timerId);


// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });

//example 6
// let num = 0;
// setTimeout(() => alert(i), 100); // ?
// // припустимо, що час виконання цієї функції > 100 мс
// for(let i = 0; i < 100000000; i += 1) {
//   num+=1;
//   setTimeout(() => alert(i), 100); // ?
// }


const square = document.querySelector('.change-color');

const changeColor = () => {
const colors = ['red', 'green', 'blue', 'purple'];

let index = 0;

setInterval(() => {
  square.style.backgroundColor = colors[index]

  index = (index + 1)  % colors.length;
 
}, 3000)
}

changeColor()

