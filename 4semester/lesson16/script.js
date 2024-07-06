const paginationContainer = document.querySelector('.pagination');
const button = document.querySelector('.button');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10`;

let page = 1;
let cardsPerPage = 2;
let catData = [];

async function getCatsImg() {
 
    try {
      const data = await getFetchApi();
      if (data && data.length > 0) {
        catData = data;
        page = 1; // Reset to first page
        updateButtons();
        createLayout(catData);
      }
    } catch(error) {
      displayError(error.message)
    }

  
}

async function getFetchApi() {
  try {
    const response = await fetch(catUrl);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
     
    }
    return response.json();
  } catch(error) {
      console.log(`Fetch error: ${error}`);
      throw error;
  }
  
}

function createLayout(cats) {
  paginationContainer.innerHTML = ''; 
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const currentCats = cats.slice(start, end);
 
  currentCats.forEach((cat) => {
    const cardHtml = `
    <div class="cards">
      <h2>${cat.id}</h2>
      <img src="${cat.url}" alt="${cat.id}">
      <p>Height: ${cat.height}</p>
      <p>Width: ${cat.width}</p>
    </div>
     `;

    paginationContainer.innerHTML += cardHtml;
  })
 

}

function displayError(error) {
  paginationContainer.innerHTML = `<p class="error">${error}</p>`
}

function updateButtons() {
  prevButton.disabled = page === 1;
  nextButton.disabled = page === Math.ceil(catData.length / cardsPerPage);
}


button.addEventListener('click', getCatsImg);
prevButton.addEventListener('click', () => {
  if (page > 1) {
      page--;
      updateButtons();
      createLayout(catData);
  }
});

nextButton.addEventListener('click', () => {
  if (page < Math.ceil(catData.length / cardsPerPage)) {
      page++;
      updateButtons();
      createLayout(catData);
  }
  console.log('next button');
});