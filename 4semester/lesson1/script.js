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
// let output =document.querySelector('.output');
// let colorPalette = document.querySelector('.color-palette');



// const selectColor = (event) => {
//   // В цій функції:
//   //1. Перевірити чи елемент, який викликав подію кліку не є кнопкою. Якщо клікнули по кнопці функція не має виконуватися
//   if(event.target.nodeName !== 'BUTTON') {
//     return;
//   }

  
//   //2. оголосити функцію вибору кольору коли подія спливає. В параметрах вказати подію


//   //2. необхідно отримати колір, що повязаний з кнопкою, яка була натиснута в палітрі кольорів. Для цього:
//   // а)
//   // до елементу, який був клікнутий додамо властивісь DOM-елементів, яка повертає обєкт // що містить усі користувацькі атрибути даних data встановлені на елементі

//   // б) звернемось до конкретного користувацького атрибута даних "колір" 

//   const selectedColor = event.target.dataset.color;


//   //3. до пешкі з класом output додати текстове значення з назвою вибраного кольору.
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// const randomColor = () => {
 
//   return `#${randomHex()}${randomHex()}${randomHex()}`;
  
// }

// const randomHex = () => {
  
//   return Math.round(Math.random() * 256)
//   .toString(16)
//   .padStart(2,'0');
// }

// colorPalette.addEventListener('click', selectColor);

// createPaletteItems();



// function createPaletteItems() {
  
//   let items = [];
//   for (let i = 0; i< 60; i++) {
//     let color = randomColor();
//     let button = document.createElement('button');
//     button.type = 'button';
//     button.dataset.color = color;
//     button.style.backgroundColor = color;
//     button.classList.add('button')
//     items.push(button);
//   }

//   colorPalette.append(...items);

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

// function deleteUser(event) {
//   if(event.target.classList.contains('deleteButton')) {
//     console.log('delete button is found');

//     const parent = event.target.closest('li');
//     console.log(parent);

//     parent.remove()
//   }
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
