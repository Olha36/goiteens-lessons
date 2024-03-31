//example 1
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings);


//example 2
const input = document.querySelector('.example2');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
  localStorage.info = input.value;
})

document.write(localStorage.info)