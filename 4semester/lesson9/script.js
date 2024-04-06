// example 1
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
// console.log(settings);

// localStorage.setItem('settings', JSON.stringify(settings));


// const storedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(storedSettings);

// console.log(parsedSettings);


//example 2
// const input = document.querySelector('.example2');
// const button = document.querySelector('.button');

// button.addEventListener('click', function() {
//   localStorage.info = input.value;
// })

// document.write(localStorage.info)

//task1
// function addToLocalStorage(key, object) {
//   let objectString = JSON.stringify(object);

//   localStorage.setItem(key, objectString)
//   return object;
// }

const key = 'task 1'

const object = {
  name: 'John',
  age: 30
}

// addToLocalStorage(key, object);

//task 2
function getFromLocalStorage(key) {
 const stringToObj = localStorage.getItem(key);

  const object = JSON.parse(stringToObj);
  return object;
}

console.log(getFromLocalStorage(key));
//task 3

// task 4

//task 5

//task 6

//task 7

//task 8

//task 9




