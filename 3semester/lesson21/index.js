// function eventDown(event) {
//   console.log('keydown was clicked', event);
//   console.log(event.key);
// }

// document.addEventListener('keydown', eventDown)

// function keyUpEvent(event) {
//   // event.prevent 
//     // console.log('keyup was clicked', event.code);
  
//     console.log('ctl was clicked', event.shiftKey);
//     console.log(event)
// }

// document.addEventListener('keyup', keyUpEvent)
// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// targetBtn.addEventListener('click', ()=>{})
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Додаємо слухача на цільову кнопку');
//     targetBtn.addEventListener('click', onClick)
// })


// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Знімаємо слухача на цільову кнопку');
//     targetBtn.removeEventListener('click', onClick)
// });


//  const onClick = function() {
//     console.log("Відслідковуємо клік");
// }


//task 2 Подія сабміту форми - показати приклад на практиці. Можна використати наступну розмітку

const buttonEl = document.querySelector('.add-style');
// console.log(buttonEl.textContent);
// const example = document.querySelector('.example')

function handleClick(event) {
  // alert('clicked');

console.log('event type:', event.type);
console.log('event target:', event.target);
console.log('event current target:', event.currentTarget);

buttonEl.style.backgroundColor = 'blue'
}

buttonEl.addEventListener('click',  handleClick);
// example.addEventListener('dblclick', handleClick)
// // buttonEl.removeEventListener('click', handleClick);

// const linkEl = document.querySelector('.link-el');

// function handleEvent(event) {
//   event.preventDefault();
//   alert('link')
// }
// linkEl.addEventListener('click', handleEvent)
