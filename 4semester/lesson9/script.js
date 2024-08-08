// function addObject(key, object) {
//  const objectJson = JSON.stringify(object);

//  localStorage.setItem(key, objectJson)
// }

// const object = {
//   fly: "hippo",
//   sit: "plane"
// }

// let key = 'Let/s add info to localstorage'

// addObject(key, object)


//task 2
// function getItem(key) {
//   console.log(key);
  
//  const getItemFromStorage = localStorage.getItem(key);
// console.log(getItemFromStorage);

//   const objectJson = JSON.parse(getItemFromStorage);
//   console.log(objectJson) ;
  
// }
// getItem(key);

// task 3
// function removeKeys(key) {
//   console.log(key);
  
//  localStorage.removeItem(key);


//  console.log(object);
 
// }
// removeKeys(key)

// task 4
// function clearStorage() {
//   localStorage.clear();
// }
// clearStorage();

//task 5
// function lengthStorage() {
//   return localStorage.length;
// }
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

// function  returnList() {
//   const keys = [];
  
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i)
//     if (key !== null) {
//       keys.push(key);
//     }
//   }
//   return keys;
  
//   }
//   console.log(returnList());
//task 7
// function checkKey(key) {
//   return localStorage.getItem(key) !== null;
// }
// console.log(checkKey());
//task 8
// function checkValue(value) {
//   return localStorage.getItem(value) !== null;
// }
// console.log(checkValue('somevalue1'));

//task 9
// function addItems(item, value) {
//   const existingArr = JSON.parse(localStorage.getItem(item)) || [];

//   existingArr.push(value);

//   localStorage.setItem(item, JSON.stringify(existingArr))
// }
// addItems('myArray', 'value45');
// console.log(JSON.parse(localStorage.getItem('myArray')));



//3


function handleSubmit() {
  const name = prompt('Enter your name');
  const age = prompt('Enter your age');
  const email = prompt('Enter your email');
  
  const info = {
    name: name,
    age: age,
    email: email
  }
  console.log(info);

  localStorage.setItem('userInfo', JSON.stringify(info));
}
handleSubmit();
 
