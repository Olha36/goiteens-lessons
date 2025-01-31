// const bodyElement = document.querySelector('body');
// // console.log(bodyElement);
// const appendDivElement = document.querySelector('.append-practice');
const colorPickerContainer = document.querySelector('.js-color-picker');
// const demoText = document.querySelector('button[data-action="Vasya"]');
// console.log(demoText.dataset);
// function changeText () {
//   demoText.innerHTML = 'I have changed'
// }

// demoText.addEventListener('click', changeText)



// function createElements() {
//   const createTextTag = document.createElement('h3');
//   console.log(createTextTag);

//   createTextTag.classList.add('title');
//   createTextTag.textContent = 'Привіт, це перший мій створений елемент!'

//   bodyElement.appendChild(createTextTag);

//   // element.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента element.
//   const createChild2 = document.createElement('p');
//   createChild2.textContent = 'This is our first paragraph';
//   const htmlTag = createChild2.outerHTML;
//   appendDivElement.insertAdjacentHTML('afterend', htmlTag);
  

//   // const createChild3 = document.createElement('p');
//   // createChild3.textContent = 'This is our second paragraph'
//   // appendDivElement.append(createChild3);

//   // // element.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента element.
//   // const createChild4 = document.createElement('p');
//   // createChild4.textContent ='This is our third paragraph';
//   // //кому додаємо + метод + кого додаємо
//   // appendDivElement.prepend(createChild4, createChild3)
//   // // element.after(el1, el2, ...) — додає один або декілька елементів після елемента element.
//   // const createInput = document.createElement('input');
//   // appendDivElement.after(createInput)

//   // // element.before(el1, el2, ...) — додає один або декілька елементів перед елементом element.
//   // const createButton = document.createElement('button');
//   // createButton.textContent = 'Click me!';

//   // appendDivElement.before(createButton);

//   // createInput.remove();
// }
// createElements()

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function createColorPicker() {
  colorPickerOptions.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option.label;
    

    button.style.backgroundColor = option.color;
    // const buttonHTML = button.outerHTML;

    colorPickerContainer.insertAdjacentHTML('beforeend', button)
  })
}

createColorPicker()