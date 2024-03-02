// const cards = document.querySelectorAll('.card');

// const observer = new IntersectionObserver(entries => { //entries are things that have changed
//   entries.forEach(entry => {
//     console.log(entry);
//     entry.target.classList.toggle('show', entry.isIntersecting);
//   }) 
//   console.log(entries);
// }, {
//   threshold: 0.5
// })  

// cards.forEach(card =>{
//   observer.observe(card); //i want you to observe when this things changes intersections
// })

//task 2
const fruitItems = document.querySelectorAll('.fruits-list li');
const imgSelector = document.querySelectorAll('.fruits-list li img');
const fruitNameSelector = document.querySelectorAll('.fruits-list li h3');

//1. Створіть функцію, яка буде приймати два параметри: el (елемент li) та isIntersecting (булеве значення, що вказує, 
// чи перебуває елемент в зоні видимості):

// const animate = (el, isIntersecting) => {
//   let element = el.querySelector(imgSelector);

//   if(isIntersecting) {
//     element.classList.toggle('active');
//   }
// }
// //2 Оновіть callback-функцію IntersectionObserver, щоб використовувати animate для анімації елементів li:
// let observer = (entries => {
//   entries.forEach((entry) => {
//     let entryTarget = entry.target;
//     animate(entryTarget, entry.isIntersecting)
//   })
// })


// //3 Створіть екземпляр IntersectionObserver з callback-функцією та параметрами:

// let observerParameters = new IntersectionObserver(observer, {
//   threshold: 0.5,
// })
// //4 Використовуйте observer для спостереження за всіма елементами li:



const animate = (el, isIntersecting) => {
  let img = el.querySelector('img');
  let h3 = el.querySelector('h3')
  
  if(isIntersecting) {
    // img.classList.toggle('active');
    h3.style.color = 'red';
    let images = ['./img/banana.jpg', './img/pineapple.jpg', './img/watermelon.jpg', './img/cherries.jpg', './img/kiwi.jpg', './img/strawberry.jpg']; // Array of image URLs
    let randomIndex = Math.floor(Math.random() * images.length); // Get a random index from the images array
    img.src = images[randomIndex]; 
  }
}
//2 Оновіть callback-функцію IntersectionObserver, щоб використовувати animate для анімації елементів li:
let observerCallback = (entries => {
  entries.forEach((entry) => {
    let entryTarget = entry.target;
    animate(entryTarget, entry.isIntersecting)
  })
})


// //3 Створіть екземпляр IntersectionObserver з callback-функцією та параметрами:

let observerParameters = new IntersectionObserver(observerCallback, {
  threshold: 0.5,
})
// //4 Використовуйте observer для спостереження за всіма елементами li:
fruitItems.forEach((item) => {
  observerParameters.observe(item)
})









