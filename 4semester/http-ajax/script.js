// console.log("task 1");

// setTimeout(() => {
//   console.log("set time out");
// }, 3000);

// console.log('task 2')

let postsList = document.querySelector("#posts");
let BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// fetch("https://jsonplaceholder.typicode.com/posts");
fetch(BASE_URL)
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = `title: ${post.title} -body: ${post.body}`;
      postsList.append(li);
    });
  })
  .catch((error) => console.log("error is:", error));
