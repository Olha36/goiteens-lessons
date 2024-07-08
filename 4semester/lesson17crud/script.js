//example 1
 //reading
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//  .then(response => response.json())
//  .then(post => console.log(post))
//  .catch(error => console.log(error));

 // creation
 const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
 };
 
 const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
 };
 
 fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));
 


