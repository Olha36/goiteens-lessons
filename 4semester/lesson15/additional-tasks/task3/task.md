Створіть просту HTML-сторінку з кнопкою та ділянкою для відображення результату запиту.
Використовуючи AJAX, створіть функцію, яка буде відправляти GET-запит до публічного API (наприклад, https://newsapi.org/) та отримувати список статтей по ключовому слову.
При кліку на кнопку на сторінці, виконайте AJAX-запит до API та відобразіть результат на сторінці.
Реалізуйте обробку помилок, якщо запит до API не вдалося виконати.
Виведіть на сторінку повідомлення про помилку, якщо запит не вдалося виконати.
Додайте можливість передавати параметри у запиті, наприклад, для фільтрації або сортування результатів

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
      let articleNames = data.articles.map(article => `<li>${article.source.name}</li>`).join('');
      resultContainer.innerHTML = `
        <ul>
          <li>Article names are:</li>
          ${articleNames}
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
