// task 1
function addToLocalStorage(key, object) {
  let objectString = JSON.stringify(object);

  localStorage.setItem(key, objectString)
  return object;
}

const key = 'task 1'

const object = {
  name: 'John',
  age: 30
}

addToLocalStorage(key, object);



//task 2
function getFromLocalStorage(key) {
 const stringToObj = localStorage.getItem(key);

  const object = JSON.parse(stringToObj);
  return object;
}

// console.log(getFromLocalStorage(key));
//task 3

// function removeItem() {
//   localStorage.removeItem(key)
// }

// removeItem(key)
// task 4
// function clearStorage() {
//   localStorage.clear();
// }
// clearStorage();

//task 5
function lengthStorage() {
  return localStorage.length;
}
// console.log(lengthStorage());

//task 6

// function  returnList() {
// const keys = [];

// for (let i = 0; i < localStorage.length; i++) {
//   keys.push(localStorage.key(i))
// }
// return keys;

// }
// console.log(returnList());

// localStorage.setItem('key1', 'value1');
// localStorage.setItem('key2', 'value2');

function  returnList() {
  const keys = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key !== null) {
      keys.push(key);
    }
  }
  return keys;
  
  }
//   console.log(returnList());
//task 7
function checkKey(key) {
  return localStorage.getItem(key) !== null;
}
// console.log(checkKey());
//task 8
function checkValue(value) {
  return localStorage.getItem(value) !== null;
}
// console.log(checkValue('somevalue1'));

//task 9
function addItems(item, value) {
  const existingArr = JSON.parse(localStorage.getItem(item)) || [];

  existingArr.push(value);

  localStorage.setItem(item, JSON.stringify(existingArr))
}
addItems('myArray', 'value45');
console.log(JSON.parse(localStorage.getItem('myArray')));



//3
const name = prompt('Enter your name');
const age = prompt('Enter your age');
const email = prompt('Enter your email');

// 3.2

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  console.log(name);
  let age = document.getElementById('age').value;
  console.log(age);
  let email = document.getElementById('email').value;
  console.log(email);
}

 
