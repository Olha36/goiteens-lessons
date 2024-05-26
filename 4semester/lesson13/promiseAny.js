// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
//  };

const { resolve } = require("path");

//  const promiseA = makePromise("promiseA value", 1000);
//  const promiseB = makePromise("promiseB value", 3000);

//  Promise.any([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));

const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 300, "Resolved 1")
);
const promise2 = new Promise((reject) =>
  setTimeout(reject, 700, "Resolved 2")
);

Promise.any([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
