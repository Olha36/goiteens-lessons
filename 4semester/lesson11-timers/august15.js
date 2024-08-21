// console.log('Hello, checking');

// setTimeout(() => {
//     console.log('settime out 1 try');

// }, 1000);

// console.log('Hello, 2');

// const body = document.querySelector('body');

// let timer = 0;

// let interval = setInterval(() => {
//    timer++;
//    console.log(timer);

//    if(timer >= 20) {
//     clearInterval(interval);
//    }

//    if(timer === 5) {
//     body.style.backgroundColor = 'red'
//    } else if (timer === 3) {
//      body.style.backgroundColor = 'aqua'
//    } else {
//     body.style.backgroundColor = 'yellow'
//    }

// }, 1000);

// task 2
// let interval = 10;

// let intervalAdd = setInterval(() => {
//     interval--;
//     console.log(interval);

//     if(interval === 5) {
//         body.style.backgroundColor = 'red';
//     }

//     else if(interval === 0) {
//         clearInterval(intervalAdd)
//     }
// }, 1000)

// 2:0:0:0
// 123 2 3.   2 hours 3 minutes
const startTimerButton = document.querySelector('.button-start');
const stopTimerButton = document.querySelector('.button-stop');
const resetTimerButton = document.querySelector('.button-reset');

let timer = 0;
let elapsedTime = 0;

function countTime() {
//   const totalSeconds = Math.floor(elapsedTime / 100);
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor(elapsedTime / 1000);
  const miliseconds = Math.floor(elapsedTime / 1000)

//   return `${hours}:${minutes}:${seconds}:${miliseconds}`;
  console.log(`${hours}:${minutes}:${seconds}:${miliseconds}`);
}
countTime();

function startTimer() {
    let startTime = Date.now() - elapsedTime;
    console.log(startTime);

    setInterval(() => {
        elapsedTime = Date.now() - startTime;
    })
    
}
startTimer()