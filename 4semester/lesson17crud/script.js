//example 1
 //reading
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//  .then(response => response.json())
//  .then(post => console.log(post))
//  .catch(error => console.log(error));

 // creation
//  const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
//  };
 
//  const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//  };
 
//  fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

//update
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome",
//  };
 
//  const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//  };
 
//  fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log("ERROR" + error));

//   // delete
// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//  method: "DELETE",
// })
//  .then(() => console.log("Post deleted"))
//  .catch(error => console.log("Error:", error));


//task 1
// const postId = 1;
// const postsApi = `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`;


// fetch(postsApi, {
//   method: "GET",
// })
// .then(response => response.json())
//  .then(post => console.log(post))
//  .catch(error => console.log(error));


 // create
// const postToUpdate = {
//   id: 1,
//   body: "Olha is a coach",
// }
//  const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//  }
 
// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
// .then(response => response.json())
// .then(post => console.log(post))
// .catch(error => console.log("ERROR" + error));

// const update = {
//   id: 3,
//   body: "this is a practice for updation"
// }

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(update),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/${update.id}`, options)
// .then(response => response.json())
// .then(update => console.log(update))
// .catch(error => console.log("ERROR", error))

// const optionsDelete = {
//   method: "DELETE",
//   body: JSON.stringify(update),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
// }
// fetch(`https://jsonplaceholder.typicode.com/posts/${update.id}`, optionsDelete)
// .then(response => response.json())
// .then(deleted => console.log('deleted', deleted))
// .catch(error => console.log("ERROR", error))
