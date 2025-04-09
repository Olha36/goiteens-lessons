const child = document.querySelector('#child');
const parent = document.querySelector('#parent');
const descendant = document.querySelector('#descendant');
const button = document.querySelectorAll('button');
console.log(button);



parent.addEventListener('click', () => {
    alert('Parent is clicked')
})

child.addEventListener('click', () => {
    alert('Child is clicked')
})

const stopEventPropagation =  (event) => {
    event.stopImmediatePropagation();
    alert('Descendant is clicked, propagation is stopped');
}
descendant.addEventListener('click', stopEventPropagation)


// button.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         console.log('event element:', event.target);
        
//         parent.style.backgroundColor = event.target.getAttribute('data-color');
//     })
// })


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
//   // console.log(event.target);
//   if(event.target.classList.contains('deleteButton')) {
//     console.log('button');
//     const child = event.target.closest('li');
//     console.log(child);
//     child.remove();
//   }
// }

// button.forEach((btn) => {
//   btn.addEventListener('click', deleteUser);

// })

//task4
// const buttonList = document.querySelectorAll(".btn");
// console.log(buttonList);

// const hightLightElement = (event) => {
//   console.log(event.target);

//    buttonList.forEach((btn) => {
//     btn.classList.remove('active')
//   })

//   event.target.classList.add('active')
// };

// buttonList.forEach((btn) => {
//   btn.addEventListener('click', hightLightElement);
// })

