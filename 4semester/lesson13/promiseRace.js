// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
//  };
 
//  const promiseA = makePromise("promiseA value", 1000);
//  const promiseB = makePromise("promiseB value", 3000);
 
//  Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));


const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Resolved: One'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Rejected: Two'));

Promise.race([promise1, promise2])
  .then((value) => console.log(value)) // Logs: 'Rejected: Two' (the first promise to settle, which is a rejection)
  .catch((error) => console.log(error)); // Logs: 'Rejected: Two'
