const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };


// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });


// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// )


// _.forEach([1, 2, 5, 8, 10, 15], function(value) {
//   console.log(value);
// });

// console.log(_.includes([1, 2, 3, 4], 2, 1));

function updatePosition() {
  console.log('Hellow world!!!');
}


document.addEventListener('scroll', _.throttle(updatePosition, 6000));


