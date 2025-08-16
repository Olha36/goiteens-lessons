const button = document.getElementById("colorBtn");
console.log(button);

const form = document.getElementById("myForm");
console.log(form);

const wrapper = document.querySelector("#wrapper");


const handleClick = () => {
    document.body.style.background = `hsl(${Math.random() * 360}, 50%, 30%)`
}








button.addEventListener("click", handleClick);

// button.addEventListener("click", () => {
//       alert("button was clicked with anonymous function");

// });

form.addEventListener("submit", (event) => {
  // e evt event
  event.preventDefault();
  console.log("form is submitted");
  console.log("type of the event:", event.type);
});

wrapper.addEventListener('click', (event) => {
// console.log('де відбувається клік:', event.target);
console.log('шукає слухача', event.currentTarget)
})