console.log("code 1");
console.log("code 2");

function greeting() {
  return "Hello, world!";
}
console.log(greeting());

console.log("code 3");

setTimeout(() => {
  console.log("асинхронний код 1");
}, 10000);

console.log("code 4");
console.log("code 5");

const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
let box = document.querySelector("#timer");
const resetBtn = document.querySelector(".reset-btn");

let counter = 0;
let timerId;

box.textContent = counter;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    counter++;
    box.textContent = counter;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);

  counter = 0;
  box.textContent = counter;
});
