//task 1
// const clearButton = document.querySelector('.js-clear');
// let outputText = document.querySelector('.js-output');
// let enteredText = '';

// function showEnteredText(event) {
//   event.preventDefault()
//   let key = event.key;
  
//   if(key === 'Backspace' || key ==='Delete') {
//     enteredText.slice(0, -1)
//   } else {
//     enteredText += key;
//   }
//   console.log(event.key);

//   outputText.textContent = enteredText;
// }

// function clearText() {
//   outputText.textContent = ''
// }

// document.addEventListener('keypress', showEnteredText);
// clearButton.addEventListener('click', clearText)

//task 2
// const inputText = document.querySelector('#input');
// const message = document.querySelector('#message');
// let enteredText = '';

// function getTextContent(event) {
// console.log(event.key);
// let key = event.key;
// if(key === 'Backspace' || key === 'Delete') {
//   enteredText.slice(0, -1);
// } else {
//   enteredText += key
// }
// message.textContent = enteredText
// }

// input.addEventListener('keypress', getTextContent)

//task 3
// function getCode(event) {
//   console.log(event.code);
// }
// document.addEventListener('keydown', getCode)

// task 4
const boxContainer = document.querySelector('#box');

function changeBcColor(event) {
  let key = event.key;
  console.log(event.key);
  if(key === 'y') {
    boxContainer.style.backgroundColor = 'red'
  }
  
}

document.addEventListener('keydown', changeBcColor);
