const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    console.log('entry is', entry);
    entry.target.classList.toggle('show', entry.isIntersecting);
  })
}, {
    threshold: 1
});

cards.forEach((card) => {
    observer.observe(card);
})
