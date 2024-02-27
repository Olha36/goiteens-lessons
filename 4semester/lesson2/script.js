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


_.forEach([1, 2, 5, 8, 10, 15], function(value) {
  console.log(value);
});

console.log(_.includes([1, 2, 3, 4], 2, 1));

//task 1
// const input = document.querySelector('.task1-input');
// const counter = document.querySelector('.task1.throttled');

// input.addEventListener('input',  _.throttle((event) => {
//   const text = event.target.value;
//   console.log(text);
//   eventCounter.task1 += 1;
//   counter.textContent = eventCounter.task1;

// }, 500))

//task2

// const input2 = document.querySelector('.task2-input');
// let span = document.querySelector('.task2.debounced');

// input2.addEventListener('input', _.debounce((event) => {
//   console.log(event.target.value);
//   eventCounter.task2 += 1;
//   span.textContent = eventCounter.task2
// }, 500))

//task 3
// const input = document.querySelector('.task3-input');
// const span = document.querySelector('.task3.debounced');

// input.addEventListener('input', _.debounce((event) => {
//   console.log(event.target.value);

//   span.textContent = `${event.target.value}!`;
// }, 500))

//ht1
const slider = document.querySelector('.slider');
const image = document.querySelector('.slider__image');
const input = document.querySelector('.slider__input');

input.addEventListener('input', _.debounce(() => {
  const newWidth = input.value + "%"

  image.style.width = newWidth;
}, 100))



