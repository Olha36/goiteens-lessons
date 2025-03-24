// task 1
document.addEventListener("DOMContentLoaded", () => {
  function animateSliding(element) {
    const slideOnScrollOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    };

    const slideOnScrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      slideOnScrollOptions
    );

    slideOnScrollObserver.observe(element);
  }

  function createSlideContent(leftMarkup, rightMarkup) {
    const wrapper = document.createElement("div");
    wrapper.className = "slide-content-wrapper";

    const leftContent = document.createElement("div");
    leftContent.className = "slide-content-from-left";
    leftContent.innerHTML = leftMarkup;

    const rightContent = document.createElement("div");
    rightContent.className = "slide-content-from-right";
    rightContent.innerHTML = rightMarkup;

    wrapper.appendChild(leftContent);
    wrapper.appendChild(rightContent);

    // Attach animation logic to elements
    animateSliding(leftContent);
    animateSliding(rightContent);

    return wrapper;
  }

  function createApp() {
    const container = document.createElement("div");
    container.className = "container";

    // Create instances of SlideContent with different content
    container.appendChild(
      createSlideContent(
        `<img src="https://picsum.photos/id/74/700" alt="image" />`,
        `<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae...</p>`
      )
    );

    container.appendChild(document.createElement("hr"));

    container.appendChild(
      createSlideContent(
        `<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae...</p>`,
        `<img src="https://picsum.photos/id/74/700" alt="image" />`
      )
    );

    container.appendChild(document.createElement("hr"));

    container.appendChild(
      createSlideContent(
        `<img src="https://picsum.photos/id/74/700" alt="image" />`,
        `<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae...</p>`
      )
    );

    return container;
  }

  // Mount the entire app to the #app container in HTML
  const appContainer = document.getElementById("app");
  appContainer.appendChild(createApp());
});

// task 2
// window.addEventListener("load", createObserver(), false);

// function createObserver() {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: [0],
//   };
//   // instantiate a new Intersection Observer
//   let observer = new IntersectionObserver(onChange, options);

//   // pass each element to observe method
//   let elements = document.querySelectorAll("p");
//   for (let elm of elements) {
//     observer.observe(elm);
//   }
// }
// // When the browser detects that the target element visibility ratio crosses one of the thresholds in our list it calls our handler function
// function onChange(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio !== 0) {
//       entry.target.classList.add("visible");
//     } else {
//       console.log("YE");
//       entry.target.classList.remove("visible");
//     }
//   });
// }


