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

  const observer = new IntersectionObserver((entries) => {
    // console.log(entries);
    entries.forEach(entry => {
      const imgTitle = entry.target.querySelector('h3');
      const image = entry.target.querySelector('img');
      
      if(entry.isIntersecting) {
        const newImg = image.getAttribute('data-source')
        imgTitle.style.color = 'blue';
        image.style.transform = 'scale(1.5)';
        image.src = newImg;
        observer.unobserve(entry.target)
      }  else {
        imgTitle.style.color = 'red';
      }
    })
    
  }, {threshold: 0.5})

  fruitsList.forEach(fruit => {
   observer.observe(fruit)
  })


