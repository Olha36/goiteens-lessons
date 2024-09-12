const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url, {
  method: 'GET',
})
  .then((response) => {
    console.log('Status code:', response.status);
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log('Error is:', error);
  });
