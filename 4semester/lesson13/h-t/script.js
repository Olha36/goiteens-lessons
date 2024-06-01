//task 1

// function delayedPromise(value, delay) {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   })
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.log("Error is caught:", error);
//     });
// }

// const arr = [
//   delayedPromise("Execution 1:", 3000),
//   delayedPromise('Execution 2:', 4000),
//   delayedPromise('Execution 3:', 5000),
//   delayedPromise('Execution 4:', 6000),
//   delayedPromise('Execution 5:', 7000),
// ];

// Promise.all(arr);

// task 2
function randomDelay(value, delay) {
 delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  })

    .then((value) => {
      console.log("Найшвидший результат:", value);
    })
    .catch((error) => {
      console.log("Error was caught:", error);
    });
}

const arr2 = [
  randomDelay("Execution 1:"),
  randomDelay("Execution 2:"),
  randomDelay("Execution 3:"),
  randomDelay("Execution 4:"),
  randomDelay("Execution 5:"),
];

Promise.race(arr2);
