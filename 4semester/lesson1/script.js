// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// const button = document.querySelector("button");
// const parent = document.querySelector('.parent');

// parent.addEventListener("click", () => {
//   alert("parent was clicked");
// });

// child.addEventListener("click", () => {
//   alert("child was clicked");

// });

// descendant.addEventListener("click", (e) => {
//   alert("descendant was clicked");
//   e.stopPropagation()
// });

// function example(e) {
//   console.log(`event detached:`, e.target);
//    console.log(`event detached:`, e.currentTarget);
//   // let text = e.target.nodeName;
//   // document.getElementById("demo").innerHTML = text;
// }
// document.addEventListener('click', example)

//додати обробники подій і показати результат

//example 3
// function example2(e) {
//   console.log('Button was clicked', e.target);
//   e.target.style.backgroundColor ='green';
//   e.target.style.padding = '20px'

// }
// parent.addEventListener('click', example2)

// task2
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color; // на клікнутий елемент встановити еолір і це все помістити в змінну selectedColor
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

colorPalette.addEventListener("click", selectColor);

//example1
// const btns = document.querySelectorAll('.btn');
// console.log(btns);

// btns.forEach((button) => {
//   button.addEventListener('click', function(event) {
//     console.log(event.currentTarget);
//     console.log(event.target);
//   })
// })

//task3
// const userList = document.getElementById('userList');
// const button = document.querySelectorAll('.deleteButton')

// function deleteUser(event) {

// }

//task4
const buttonList = document.querySelectorAll(".btn");
console.log(buttonList);

const hightLightElement = (event) => {};
