// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
  task1: 0,
  task2: 0
};


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

//task 1
const task1Input = document.querySelector('.task1-input');
const task1Counter = document.querySelector('.task1.throttled');
console.log(task1Input, task1Counter);

task1Input.addEventListener('input', _.throttle((event) => {
  const text = event.target.value;
  console.log(text);
    eventCounter.task1 += 1;
    task1Counter.textContent = eventCounter.task1;
}, 500))

//task 2
const task2Input = document.querySelector('.task2-input');
const task2Counter = document.querySelector('.task2.debounced');
console.log(task2Counter);

task2Input.addEventListener('input', _.debounce((event) => {
    const text = event.target.value;
  console.log(text);
  eventCounter.task2 += 1;
  task2Counter.textContent = eventCounter.task2;
}, 500));



