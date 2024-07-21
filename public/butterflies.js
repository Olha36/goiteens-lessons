// butterflies.js

// Function to create a butterfly element
function createButterfly() {
  const butterfly = document.createElement('div');
  butterfly.classList.add('butterfly');
  // Correct path to the images folder
  butterfly.style.backgroundImage = `url('../img/butterfly${Math.floor(Math.random() * 3) + 1}.jpeg')`;

  // Randomize position and animation duration
  butterfly.style.top = `${Math.random() * 100}vh`;
  butterfly.style.left = `${Math.random() * 100}vw`;
  butterfly.style.animation = `fly ${Math.random() * 10 + 5}s linear infinite`;

  document.body.appendChild(butterfly);

  // Remove butterfly after animation ends to clean up
  butterfly.addEventListener('animationend', () => {
    butterfly.remove();
  });
}

// Create butterflies at intervals
setInterval(createButterfly, 500);
console.log('Butterfly animation script loaded.');
