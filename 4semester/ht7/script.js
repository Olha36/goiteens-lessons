function getRandomNumber(min, max) {
  return  Math.floor(Math.random() * (max - min +1)) + min;
}



function createElements() {
 const container =  document.createElement('div');
 container.classList.add('element');
 document.body.appendChild(container);

 container.style.left = getRandomNumber(0, window.innerWidth - 50) + 'px';
 container.style.top = getRandomNumber(0, window.innerHeight - 50) + 'px';
  return container;
}

function animateElements() {
  const elements = document.querySelectorAll('.element');

  elements.forEach((element) => {
    const positionX = getRandomNumber(0, window.innerWidth - 50);
    const positionY = getRandomNumber(0, window.innerHeight - 50);
    const newSize = getRandomNumber(20, 100);
    const newColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

    element.style.left = positionX + 'px';
    element.style.top = positionY + 'px';

    element.style.width = newSize + 'px';
    element.style.backgroundColor = newColor;
  })


}

createElements()
createElements()
createElements()
createElements()
setInterval(animateElements, 3000)
