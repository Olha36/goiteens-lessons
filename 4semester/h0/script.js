const elem = document.querySelector('#box');

document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    console.log("function is executing");
    let mouseX = e.pageX;
    let mouseY = e.pageY;
  
    elem.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)'
  }, 100)
);

