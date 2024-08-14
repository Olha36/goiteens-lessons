// console.log('Example 1: синхронний код');
// console.log('Example 2: синхронний код');

// setTimeout(() => {
//   console.log('Example 3: асинхронний код');
// }, 1000)

// console.log('Example 4: синхронний код');
// console.log('Example 5: синхронний код');
// console.log('Example 6: синхронний код');

// const setIntervalFunction = () => {
//   console.log('Example 7: синхронний код');
// };

// const intervalID = setInterval(setIntervalFunction, 3000)

// clearInterval(intervalID);

// console.log('Example 8: синхронний код');
// console.log('Example 9: синхронний код');
// console.log('Example 10: синхронний код');
// console.log('Example 11: синхронний код');


// task 1

const counter = document.querySelector('#counter');
console.log(counter);
const jsStart = document.querySelector('.js-start');
const jsStop = document.querySelector('.js-stop');

let counterItem = 0;
let clearCounter;

function counterStart() {
 clearCounter = setInterval(() => {
    counterItem += 1;
    // console.log(counterItem);
    counter.textContent = counterItem;
  }, 1000);
}
// counterStart();

function removeCounterStart() {
  clearInterval(clearCounter);
}

jsStart.addEventListener('click', counterStart);
jsStop.addEventListener('click', removeCounterStart);


// task 2
const changeColorSquare = document.querySelector('.change-color');

const colorArray = ['red', 'blue', 'green', 'purple', 'grey'];

function changeColor() {
    let index = 0;

    setInterval(() => {
        changeColorSquare.style.backgroundColor = colorArray[index]
       index = (index + 1) % colorArray.length;
    }, 3000)
}

changeColor() 