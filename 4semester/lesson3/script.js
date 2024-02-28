const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => { //entries are things that have changed
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  }) 
  console.log(entries);
}, {
  threshold: 1
})  

cards.forEach(card =>{
  observer.observe(card); //i want you to observe when this things changes intersections
})

