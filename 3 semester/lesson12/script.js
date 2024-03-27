// const printValue = function (value) {
//   console.log(value);
// }; 
// printValue('this is the first function')


// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// }; 
// prettyPrint('this is the second function')

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//    console.log(action(i));
//   }
// };

// repeat(5, printValue);

const arr = [1, 2, 3, 4, 5, 20];


function sumArray(arr, callback) {
  // пиши код тут

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  callback(sum);
}

const cb = (sum) => {
  console.log(sum);
}


sumArray(arr, cb);