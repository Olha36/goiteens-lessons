const section = document.querySelector("section");
const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      
    });
  }
);

images.forEach((el, i) => {
  observer.observe(el);
});


// const cards = document.querySelectorAll(".card");

// const observer = new IntersectionObserver((entries) => {
//   console.log(entries);
//   entries.forEach((entry) => {
//     console.log('entry is', entry);
//     entry.target.classList.toggle('show', entry.isIntersecting);
//   })
// }, {
//     threshold: 1
// });

// cards.forEach((card) => {
//     observer.observe(card);
// })

// 2


// document.addEventListener("DOMContentLoaded", () => {
//   //create a function for images lazy loading
//   function lazyImage({ src, alt, loaderIcon }) {
//     const img = document.createElement("img");
//     const imgSrc = loaderIcon
//       ? loaderIcon
//       : "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";

//     img.src = imgSrc;
//     img.alt = alt;

//     //observer object
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             img.src = src;
//             observer.unobserve(img);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );
//     // give observe method to observer object
//     observer.observe(img);
//     return img;
//   }

//   // function to create the main layout
//   function createLayout() {
//     const container = document.createElement("div");
//     container.classList.add("container");

//     const heading = document.createElement("h1");
//     heading.textContent = "Scroll down to see images";

//     container.appendChild(heading);

//     const images = [
//       { src: "https://picsum.photos/id/736/300/300", alt: "title1" },
//       { src: "https://picsum.photos/id/730/300/300", alt: "title2" },
//       { src: "https://picsum.photos/id/635/300/300", alt: "title3" },
//       { src: "https://picsum.photos/id/536/300/300", alt: "title4" },
//       { src: "https://picsum.photos/id/436/300/300", alt: "title5" },
//       { src: "https://picsum.photos/id/336/300/300", alt: "title6" },
//       { src: "https://picsum.photos/id/236/300/300", alt: "title7" },
//       { src: "https://picsum.photos/id/136/300/300", alt: "title8" },
//       { src: "https://picsum.photos/id/74/300/300", alt: "title9" },
//     ];
//     console.log(images);
//     images.forEach((image) => {
//       const imgElement = lazyImage({
//         src: image.src,
//         alt: image.alt,
//         loaderIcon:
//           "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif",
//       });

//       container.appendChild(imgElement);
//     });
//     return container;
//   }

//   createLayout();
//   // mount the main layout to the DOM
//   const root = document.getElementById("app");
//   root.append(createLayout());
// });


