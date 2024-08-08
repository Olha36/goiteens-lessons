// example 1
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
// console.log(settings);

// localStorage.setItem('settings', JSON.stringify(settings))

// const storedSettings = localStorage.getItem('settings');
// console.log(storedSettings);

// const parsedSettings = JSON.parse(storedSettings);

// console.log(parsedSettings);


//example 2
const input = document.querySelector('.example2');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
  localStorage.info = input.value;
})

document.write(localStorage.info)
