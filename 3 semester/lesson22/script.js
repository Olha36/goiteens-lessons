import './mouse.js'
//task 1
const button = document.querySelector('.js-clear');
const textOutput = document.querySelector('.js-output')
let enteredText = '';

function showEnteredText(e) {
  console.log(e.key);
  let key = e.key;

  enteredText += key;
  
  textOutput.textContent = enteredText;

}

function deleteText() {
  textOutput.textContent = '';
}
document.addEventListener('keypress', showEnteredText)
button.addEventListener('click', deleteText)


