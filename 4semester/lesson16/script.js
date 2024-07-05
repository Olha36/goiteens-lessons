const paginationContainer = document.querySelector('.pagination');
const button = document.querySelector('.button')
const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10`;

async function getCatsImg() {
 
    try {
      const catData = await getFetchApi();
      if (catData && catData.length > 0) {
        createLayout(catData[0]); // Assuming you want to display the first cat's data
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
getFetchApi();

function createLayout(cat) {
 
  paginationContainer.innerHTML = `
    <h2>${cat.id}</h2>
    <img src="${cat.url}" alt="${cat.id}">
    <p>Height: ${cat.height}</p>
    <p>Weight: ${cat.weight}</p>
  `
}

function displayError(error) {
  paginationContainer.innerHTML = `<p class="error">${error}</p>`
}

button.addEventListener('click', getCatsImg)