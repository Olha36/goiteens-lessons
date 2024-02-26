const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
  task1: 0,
  task2: 0,
  task3: 0
};





document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});


document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter.debounced += 1;
    debouncedOutput.textContent = eventCounter.debounced;
  }, 300)
)
_.forEach([1, 2, 3, 6, 5], function(value) {
  console.log(value);
});


console.log(_.includes([1, 2, 3], 1, 0));
// => false

//task 1
// const task1Input = document.querySelector('.task1-input');
// const task1Output = document.querySelector('.task1.throttled')

// task1Input.addEventListener('input', _.throttle(() => {
//   console.log(task1Input.value);
//   eventCounter.task1 += 1;
//   task1Output.textContent = eventCounter.task1;
//   }, 500)
// )

//task2

// const task2Input = document.querySelector('.task2-input');
// const task2Output = document.querySelector('.task2.debounced')

// task2Input.addEventListener('input', _.debounce(() => {
//   console.log(task2Input.value);
//   eventCounter.task2 += 1;
//   task2Output.textContent = eventCounter.task2;
//   }, 500)
// )

//task 3
const task3Input = document.querySelector('.task3-input');
const task3Output = document.querySelector('.task3.debounced')

task3Input.addEventListener('input', _.debounce(() => {
  const name = task3Input.value;
  if (name) {
    task3Output.textContent = name;
  } else {
    task3Output.textContent = '';
  }
}, 500));



