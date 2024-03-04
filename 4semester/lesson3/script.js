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

const animate = (el, isIntersecting) => {
  let element = el.querySelector('img');
  let h3 = el.querySelector('h3')
  console.log(element);

  if(isIntersecting) {
    element.classList.toggle("active");
    h3.style.backgroundColor = 'red'
  }
}

const observer = (entries) => {
  entries.forEach(entry => {
    let entryTarget = entry.target;
    animate(entryTarget, entry.isIntersecting)
  })
  console.log(entries);
}

const observerCallback = new IntersectionObserver(observer, {
  threshold: 0.5,
})


fruitItems.forEach((item) => {
  observerCallback.observe(item);
})





