// const elem = document.querySelector('#box');

// document.addEventListener(
//   "mousemove",
//   _.debounce((e) => {
//     console.log("function is executing");
//     let mouseX = e.pageX;
//     let mouseY = e.pageY;
  
//     elem.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)'
//   }, 200)
// );


//task3
const dataAttributeImages = document.querySelectorAll('img[data-src]');
console.log(dataAttributeImages);

let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (pictures, observer) => {
  pictures.forEach(picture => {
    if (picture.isIntersecting) {
      const image = picture.target;
      image.src = image.dataset.src;
      observer.unobserve(image)
    }
  });
};

let observer = new IntersectionObserver(callback, options);
dataAttributeImages.forEach(picture => {
  observer.observe(picture);
});

