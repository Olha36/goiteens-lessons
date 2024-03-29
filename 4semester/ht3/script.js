document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  const loadButton = document.getElementById('loadButton');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const originalSrcs = []; // Array to store original srcs

  const loadImage = function(entry) {
    const image = entry.target;
    const originalSrc = image.getAttribute('src');
    originalSrcs.push(originalSrc); // Store original src
    image.src = image.getAttribute('data-src');
    image.classList.remove('lazy-load');
    observer.unobserve(image);
  };

  const revertImages = function() {
    images.forEach((image, index) => {
      const dataSrc = image.getAttribute('data-src');
      const originalSrc = originalSrcs[index];
      image.src = originalSrc; // Revert to original src
      image.setAttribute('data-src', originalSrc); // Update data-src to original src
      originalSrcs[index] = dataSrc; // Update original srcs array with current data-src
      image.classList.add('lazy-load');
      observer.observe(image);
    });
    originalSrcs.length = 0; // Clear original srcs array
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry);
      }
    });
  }, options);

  images.forEach(image => {
    observer.observe(image);
  });

  loadButton.addEventListener('click', function() {
    revertImages();
  });
});
