// const cards = document.querySelectorAll('.card')
// const observer = new IntersectionObserver(entries => {
//   console.log(entries);

//   entries.forEach(entry => {
//     entry.target.classList.toggle('show', entry.isIntersecting)
//   })
// })

// cards.forEach(card => {
//   observer.observe(card)
// })
// observer.observe(cards[0])

//task 1
// const fruitsList = document.querySelectorAll('.fruits-list li');

//   const observer = new IntersectionObserver((entries) => {
//     // console.log(entries);
//     entries.forEach(entry => {
//       const imgTitle = entry.target.querySelector('h3');
//       const image = entry.target.querySelector('img');

//       if(entry.isIntersecting) {
//         const newImg = image.getAttribute('data-source')
//         imgTitle.style.color = 'blue';
//         image.style.transform = 'scale(1.5)';
//         image.src = newImg;
//         observer.unobserve(entry.target)
//       }  else {
//         imgTitle.style.color = 'red';
//       }
//     })

//   }, {threshold: 0.5})

//   fruitsList.forEach(fruit => {
//    observer.observe(fruit)
//   })

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");
  const loadImages = document.getElementById("load-images");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
    img.onload = () => {
      img.classList.add("loaded");
    };
  };

  const handleImgIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleImgIntersection, options);

  images.forEach((image) => {
    observer.observe(image);
  });

  loadImages.addEventListener("click", () => {
    images.forEach((image) => {
      preloadImage(image);
    });
  });
});
