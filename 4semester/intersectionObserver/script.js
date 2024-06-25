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
const fruitsList = document.querySelectorAll('.fruits-list li');


document.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log('hi', entry);
      }
    })
    
  })

  fruitsList.forEach(fruit => {
   observer.observe(fruit)
  })


})
