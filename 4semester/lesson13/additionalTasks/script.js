//Task 1
// const promise1 = new Promise((resolve) => resolve("success 1"));
// const promise2 = new Promise((reject) => reject("rejected with an error"));
// const promise3 = new Promise((resolve) =>
//   setTimeout(resolve, 400, "second promise is resolved")
// );

const { rejects } = require("assert");

// Promise.all([promise1, promise2, promise3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//task 2
// const promise1 = new Promise((resolve) =>
//   setTimeout(resolve, 400, "first promise is resolved")
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 200, "second promise is resolved")
// );
// const promise3 = new Promise((reject) =>
//   setTimeout(reject, 500, "third promise is reject")
// );

// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

//task 3
// const promiseReject = new Promise((reject) => reject('error occured')).catch(error => console.log(error));
// Promise.reject('error').catch(error => console.log(error))

//Task 4
// const fetchDataPromise = fetch('https://api.ipstack.com/160.39.144.19?hostname=1');
// const timeout = 5000;

// function raceTimeout(promise, timeout) {
//   const promiseInterval = new Promise((_, reject) => setTimeout(() => {
//     reject(new Error('Timeout'));
//   }, timeout));

//   return Promise.race([promise, promiseInterval])
// }
// raceTimeout(fetchDataPromise, timeout) 
// .then((data) => {
// console.log(data); // Результат початкового Promise, якщо він вирішується до закінчення таймауту
//   })
//   .catch((error) => {
// console.error(error); // Помилка "Timeout", якщо таймаут закінчився перед вирішенням початкового Promise
//   });

const fetchDataPromise = fetch('https://api.ipstack.com/160.39.144.19?hostname=1&access_key=YOUR_ACCESS_KEY'); // Додай свій access_key
const timeout = 5000;

function raceTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, timeout)
  );

  // Promise.race приймає масив Promise
  return Promise.race([promise, timeoutPromise]);
}

raceTimeout(fetchDataPromise, timeout)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Результат початкового Promise, якщо він вирішується до закінчення таймауту
  })
  .catch((error) => {
    console.error(error); // Помилка "Timeout", якщо таймаут закінчився перед вирішенням початкового Promise
  });
