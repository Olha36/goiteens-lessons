// const { response } = require("express");

// // task 1
// const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch((url), {
//   method: "GET",
// })
// .then((response) => {
//   console.log("Status Code:", response.status);
//   return response.json();
// })
// .then((json) => console.log(json))
// .catch((error) => console.error('Error:', error));

// task 2
const url2 = 'https://api.github.com/users';

fetch(url2, {
  method: 'GET',
})
  .then((response) => {
    console.log('Status Code:', response.status);
    return response.json();
  })
  .then((json) => {
   console.log(json);
   
  })
  .catch((error) => {
    console.log('Error is found', error);
  });
