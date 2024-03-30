document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img[data-src]');
  // console.log(images);
  const loadButton = document.querySelector('#loadButton');
  // console.log(loadButton);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const originalSrcs = [];

  const loadImage = function(entry) {
    const image = entry.target;
    console.log(image);
    const originalSrc = image.getAttribute('src');
    originalSrcs.push(originalSrc);
    image.src = image.getAttribute('data-src');
    image.classList.remove('lazy-load');
    observer.unobserve(image);
  }

  const revertImages = function() {
    images.forEach((image, index) => {
      const dataSrc = image.getAttribute('data-src');
      const originalSrc = originalSrcs[index];
      image.src = originalSrc;
      image.setAttribute('data-src', originalSrc);
      originalSrcs[index] = dataSrc;
      image.classList.add('lazy-load')
      observer.observe(image)
    })
    originalSrcs.length = 0;
  }

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        loadImage(entry)
      }
    });
    } , options)

    images.forEach(image => {
      observer.observe(image)
    })

    loadButton.addEventListener('click', function() {
      revertImages()
    })
  })

