const bodyElement = document.querySelector('body');
console.log(bodyElement);

const appendDivElement = document.querySelector('.append-practice');

function createElements() {
  const createTextTag = document.createElement('h3');
  console.log(createTextTag);

  createTextTag.classList.add('title');
  createTextTag.textContent = 'Привіт, це перший мій створений елемент!'

  bodyElement.appendChild(createTextTag);

  // element.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента element.
  const createChild2 = document.createElement('p');
  createChild2.textContent = 'This is our first paragraph'
  appendDivElement.append(createChild2)

  const createChild3 = document.createElement('p');
  createChild3.textContent = 'This is our second paragraph'
  appendDivElement.append(createChild3);

  // element.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента element.
  const createChild4 = document.createElement('p');
  createChild4.textContent ='This is our third paragraph';
  //кому додаємо + метод + кого додаємо
  appendDivElement.prepend(createChild4, createChild3)
  // element.after(el1, el2, ...) — додає один або декілька елементів після елемента element.
  const createInput = document.createElement('input');
  appendDivElement.after(createInput)

  // element.before(el1, el2, ...) — додає один або декілька елементів перед елементом element.
  const createButton = document.createElement('button');
  createButton.textContent = 'Click me!';

  appendDivElement.before(createButton)
}
createElements()

