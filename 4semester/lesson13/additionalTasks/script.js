//task 1
// const promise1 = Promise.resolve('Resolved promise1');
// const promise2 = Promise.resolve((reject) => console.log('reject promise2:', reject));
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Resolved after 2 seconds');
//   }, 2000);
// });
// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//   console.log('All promises resolved:', results);
// })
// .catch((error) => {
//   console.error('At least one promise was rejected:', error);
// });

//task 2
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'one')
});
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 200, 'two')
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
})