// const arr = ['1,', '2', 'true', ' kiwi'];
// arr[3] = 'pineapple';

// // console.log(arr[3]);

// arr.push('strawberry');

// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   if (arr[i] === arr[3]) {
//     continue;
   
//   }
//   // console.log(arr[i]);
  
// }

// for (item of arr) {
//   console.log(item);
// }


// let multipleArr = [
//   ['1', '2', '3', '4'],
//   ['katya', 'masha', 'vasya', 'peter'],
//   ['kiwi', 'apple', 'orange', 'tangerin']
// ]
// console.log(multipleArr[2][1]);

// for (let i = 0; i < multipleArr.length; i++) {
//   console.log(multipleArr[i]);
//   for (let j = 0; j < multipleArr.length; j++) {
//     console.log(multipleArr[j]);

    
//   }
// }     

// const arr1 = [1, 5, '4', 'hello'];
// const arr2 = ['true', 2, '{}', ['a'], 222];
// console.log(`this is arr1: ${arr1}`);
// console.log(`this is arr2: ${arr2}`);
// console.log(arr1[1] + arr2[1]);

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (let i = 0; i <= cart.length; i++) {
  // console.log(cart[i]);
 total += cart[i];
 console.log(total);
}