// task 2
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairedArr = [2, 4, 6, 8, 10]

const promise = new Promise((resolve, reject) => {
  pairedArr.forEach((num) => {
    if (num % 2 == 0) {
      resolve("paired numbers:", num);
    } else {
      reject("Є непарні числа");
    }
  });
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = {
    promise
  }