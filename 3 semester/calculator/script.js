const input = document.querySelector('.input-wrapper .input');
console.log(input);
const numberButtons = document.querySelectorAll('.buttons-left .number');
console.log(numberButtons);
const addition = document.querySelector('.addition');
console.log(addition)
const equals = document.querySelector('.equals');
console.log(equals);
const reset = document.querySelector('.reset');

numberButtons.forEach((button) => {
  button.addEventListener('click', function() {
    console.log('button works')
  })
})





