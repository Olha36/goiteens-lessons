// import './mouse.js'
//task 1
// const button = document.querySelector('.js-clear');
// const textOutput = document.querySelector('.js-output')
// let enteredText = '';

// function showEnteredText(e) {
//   console.log(e.key);
//   let key = e.key;

//   enteredText += key;
  
//   textOutput.textContent = enteredText;

// }

// function deleteText() {
//   textOutput.textContent = '';
// }
// document.addEventListener('keypress', showEnteredText)
// button.addEventListener('click', deleteText);


// function checkKey(e) {
// console.log('code ',e.code)
// console.log('key ',e.key)
// }

// document.addEventListener('keypress', checkKey)

//task 6
const startGameButton = document.querySelector('.start-game');
const textFieldSuggestedKey = document.querySelector('.suggested-key');
const textFiledResult = document.querySelector('.result');
const resetGameButton = document.querySelector('.reset-game')

const keys = ['q', '3', '9', 'n', '+', 'g', 't', 'v', 'w', 'c'];
let currentKeyIndex = 0;

function getRandomIndex(index) {
  return Math.floor(Math.random() * index)
}

function handleStartClick() {
  setInterval(() => {
    console.log('interval');
    currentKeyIndex = getRandomIndex(keys.length)
    console.log(keys[currentKeyIndex]);
  }, 1000)
}

startGameButton.addEventListener('click', handleStartClick)