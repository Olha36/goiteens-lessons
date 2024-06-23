const button = document.querySelector('.button');
const resultContainer = document.querySelector('.result-container')

function getResponse() {
  fetch('https://newsapi.org/v2/everything?q=apple&from=2024-06-22&to=2024-06-22&sortBy=popularity&apiKey=1ae02c4bf69a4a1882b8019165404a8f')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (data.articles && Array.isArray(data.articles)) {
     let articleNames = data.articles.map(article => 
       `<li>${article.source.name}</li>`).join(''); // Log each article's title
      // resultContainer.innerHTML = articleName;

      resultContainer.innerHTML = `
      <ul>
      article names are:
        <li>${articleNames}</li>
      </ul>
      `;
      data.articles.forEach(article => {
        console.log(article.source.name);
      });
    } else {
      console.error('No articles found or the response structure is incorrect');
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
}

button.addEventListener('click', getResponse);


