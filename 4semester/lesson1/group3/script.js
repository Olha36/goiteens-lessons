// example 1
const parent = document.getElementById("parent");
parent.addEventListener("click", () => {
  alert("parent is clicked");
});

const child = document.getElementById("child");
child.addEventListener("click", () => {
  alert("Child is clicked");
});

const descendant = document.getElementById("descendant");
descendant.addEventListener("click", () => {
  alert("descendant is clicked");
});
// example 2

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 100; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

colorPalette.addEventListener("click", selectColor);
