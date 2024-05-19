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

const keys = ['q', '3', '9', 'n', '+', 'G', 't', 'v', 'w', 'c'];
let currentKeyIndex = 0;
let interval;

function getRandomIndex(index) {
  return Math.floor(Math.random() * index)
}

function handleStartClick() {
 interval =  setInterval(() => {
    console.log('interval');
    currentKeyIndex = getRandomIndex(keys.length)
    console.log(keys[currentKeyIndex]);
    textFieldSuggestedKey.textContent = keys[currentKeyIndex];
  }, 1000)
}

function getPressedKey(event) {
  // console.log(event.key);
  const pressedKey = event.key;
  const keyRegister = keys[currentKeyIndex].toLowerCase();
  console.log(pressedKey, keyRegister);
  if(pressedKey === keyRegister) {
    console.log('win');
  } else {
    console.log('failed');
    clearInterval(interval);
    textFiledResult.textContent = 'Ви програли( Спробуйте ще раз';
    textFiledResult.style.color = 'red'
  }
}

function resetGame() {
  textFieldSuggestedKey.textContent = '';
  textFiledResult.textContent = '';
  handleStartClick()
}

startGameButton.addEventListener('click', handleStartClick)
document.addEventListener('keypress', getPressedKey);
resetGameButton.addEventListener('click', resetGame);