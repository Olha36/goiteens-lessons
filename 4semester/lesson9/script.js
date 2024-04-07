// example 1
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// // console.log(settings);

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

// const key = 'task 1'

// const object = {
//   name: 'John',
//   age: 30
// }

// addToLocalStorage(key, object);

//task 2
// function getFromLocalStorage(key) {
//  const stringToObj = localStorage.getItem(key);

//   const object = JSON.parse(stringToObj);
//   return object;
// }

// console.log(getFromLocalStorage(key));
//task 3

// task 4

//task 5

//task 6

//task 7

//task 8

//task 9

// const name = prompt('Enter your name');
// const age = prompt('Enter your age');
// const email = prompt('Enter your email');

// const userData = `{
//   "name": "${name}",
//   "age": ${parseInt(age)},
//   "email": "${email}"
// }`;

// console.log(userData);

// const transferToObj = JSON.parse(userData);
// console.log(transferToObj);


// localStorage.setItem('userData', JSON.stringify(userData))

// document.write(localStorage.getItem('userData')) 


//3.2
// Функція, яка буде викликатися при поданні форми
function handleSubmit(event) {
    event.preventDefault(); // Зупиняємо дефолтну подію форми (щоб сторінка не перезавантажувалася)

    let name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    updateUserData(name, age, email);

    // Додайте будь-яку додаткову логіку, яку потрібно виконати після оновлення даних

    // Вивід повідомлення про успішне оновлення (опціонально)
    alert('Your data has been updated successfully!');
}

function updateUserData(name, age, email) {
  const userData = `{
  "name": "${name}",
  "age": ${parseInt(age)},
  "email": "${email}"
}`;
 localStorage.setItem('userData', JSON.stringify(userData))
}
// Додаємо обробник подання форми
document.getElementById('userDataForm').addEventListener('submit', handleSubmit);


