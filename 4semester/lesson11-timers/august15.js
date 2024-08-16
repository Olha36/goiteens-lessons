// console.log('Hello, checking');

// setTimeout(() => {
//     console.log('settime out 1 try');
    
// }, 1000);

// console.log('Hello, 2');

const body = document.querySelector('body');

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
// 180
const startTimerButton = document.querySelector('.button-start');
const stopTimerButton = document.querySelector('.button-stop');
const resetTimerButton = document.querySelector('.button-reset');

let timer = 0;

function countTime(elapsedTime) {
    const hours = String(Math.floor(elapsedTime / 360000)).padStart(2, '0')
    // const minutes
    // const seconds
    // const miliseconds

    return `${hours}:${minutes}:${seconds}:${miliseconds}`
}
