//task 1
const clearButton = document.querySelector(".js-clear");
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
// const boxContainer = document.querySelector('#box');

// function changeBcColor(event) {
//   let key = event.key;
//   console.log(event.code);
//   if(key === 'y') {
//     boxContainer.style.backgroundColor = 'yellow'
//   } else if(key === 'g') {
//     boxContainer.style.backgroundColor = 'green'
//   } else {
//     boxContainer.style.backgroundColor = 'red'
//   }

// }

// document.addEventListener('keydown', changeBcColor);

//task 5
// const boxContainer = document.querySelector('#box');

// function logKey(e) {
//   console.log(e.key);
//   let key = e.key;
//   let currentHorizPosition = boxContainer.offsetLeft;
//   console.log(currentHorizPosition);
//   let currentVerticPosition = boxContainer.offsetTop;
//   let movePos = 10;
//   if (key === 'ArrowRight') {
//     console.log('arrow right was pressed');
//     boxContainer.style.left = (currentHorizPosition + movePos) + 'px'
//   } else if (key === 'ArrowLeft') {
//     console.log('arrow left was pressed');
//     boxContainer.style.left = (currentHorizPosition - movePos) + 'px'
//   } else if (key === 'ArrowUp') {
//     console.log('top clicked');
//     boxContainer.style.top = (currentVerticPosition - movePos) + 'px'
//   } else if (key === 'ArrowDown') {
//     console.log('down clicked');
//     boxContainer.style.top = (currentVerticPosition + movePos) + 'px'
//   }
// }
// document.addEventListener('keydown', logKey)

//task 6
// function task6() {
//   // const buttonStartGame = document.querySelector(".start-game");
//   let textFieldSuggestedKey = document.querySelector(".suggested-key");
//   const textFiledResult = document.querySelector(".result");
//   // const buttonResetGame = document.querySelector(".reset-game");

//   const keys = ["Е", "Л", "В", "П", "Ф", "І", "Ц", "У", "С", "М"];
//   let currentKeyIndex = 0;

//   function getRandomIndex(max) {
//     return Math.floor(Math.random() * max);
//   }
 
 
//   function handleStartClick() {
//     // console.log("start game");
//    interval = setInterval(() => {
//       currentKeyIndex = getRandomIndex(keys.length); // Отримуємо випадковий індекс
//       textFieldSuggestedKey.textContent = keys[currentKeyIndex]; // Встановлюємо випадкову літеру
//       // console.log(keys[currentKeyIndex]);
//     }, 3000);
//   console.log('handle click function');
//   interval;
//   }

//   function getPressedKey(event) {
//     const pressedKey = event.key;
//     // necessity to compare letters in one register
//     const enteredCaseKey = keys[currentKeyIndex].toLowerCase();
//     console.log(pressedKey, keys[currentKeyIndex].toLowerCase());
//     if (pressedKey === enteredCaseKey) {
//       console.log('you have won');
//     } else {
//        console.log('you have failed');
//       textFiledResult.textContent = 'you have failed'
//       clearInterval(interval)
//     }
//   }

//   function handleResetGame() {
//     console.log("reset game");
//     textFieldSuggestedKey.textContent = '';
//     textFiledResult.textContent = '';
//     handleStartClick();
//   }

//   function handleClickCommon(event) {
//     const { target } = event;
//     if (target.closest(".start-game")) {
//       handleStartClick(event);
//     } else if (target.closest(".reset-game")) {
//       handleResetGame(event);
//     }
//   }

//   // buttonStartGame.addEventListener("click", handleStartClick);
//   // buttonResetGame.addEventListener("click", handleResetGame);
//   document.addEventListener("keypress", getPressedKey);
//   document.addEventListener("click", handleClickCommon);
// }

// task6();

//task 7
function task7 () {

}

task7()
