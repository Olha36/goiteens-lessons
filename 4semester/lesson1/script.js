// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener('click', () => {
//   alert('parent was clicked');
// })

// // child.addEventListener('click', () => {
// //   alert('child was clicked');
// // })

// descendant.addEventListener('click', () => {
//   alert('descendant was clicked')
// })

//додати обробники подій і показати результат

// task2
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");


// colorPalette.addEventListener("click", selectColor);


// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }


//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }


// // Some helper functions to render palette items
// createPaletteItems();


// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }


// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }


// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }





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
const buttonList = document.querySelectorAll('.btn');
console.log(buttonList);

const hightLightElement = (event) => {
  
  buttonList.forEach(button => {
    button.classList.remove('active');
  });

  event.target.classList.add('active');

}

const buttonElement = buttonList.forEach((button) => {
  button.addEventListener('click', hightLightElement)
})
