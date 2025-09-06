document.addEventListener("keydown", (e) => {
  console.log("Клавіша натиснута", e.key);
});

// document.addEventListener("keyup", (e) => {
//   console.log("Спрацювала подія keyup", e.key);
// });

// document.addEventListener("keydown", (e) => {
//   console.log("Спрацювала подія keyup", e.key); //кнопка яку натиснув користувач
//   console.log("Спрацювала подія keyup", e.code); // фізична клавіша на клавіатурі
// });

const btnOpen = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", () => {
  modal.style.display = "block";
});

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }

  if ((event.metaKey || event.ctrlKey) && event.code === "KeyF") {
    console.log("ctrl+ S or Command + S");
  }
});

// ctrlKey = Ctrl, altKey = Alt, shiftkey = Shift і metaKey = command

let div = document.getElementById("box");
console.log(div);

div.addEventListener("contextmenu", () => {
  console.log("клік правою кнопкою миші");
});

div.addEventListener("dblclick", () => {
  console.log("подвійний клік");
});

document.addEventListener('mousemove', event => {
  console.log("client:", event.clientX, event.clientY);
    console.log("page:", event.pageX, event.pageY);
})
