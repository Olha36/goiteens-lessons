// const button = document.querySelectorAll('.btn');

// button.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         console.log('clicked button is:', event.target.style.background = 'red');

//     })

// })

document
  .querySelector("#debounceInput")
  .addEventListener("input", _.debounce((evt) => {
    console.log("input value changed", evt.target.value);
  }, 300));

  document
  .querySelector("#throttleInput")
  .addEventListener("input", _.throttle((evt) => {
    console.log("input value changed", evt.target.value);
  }, 300));


//   document
//   .querySelector("input")
//   .addEventListener("input", (event) => {
//     console.log("input value changed", event.target.value);
//   }, 300);
