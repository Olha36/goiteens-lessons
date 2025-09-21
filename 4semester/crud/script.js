// CRUD = Create, Read, Update, Delete

// GET = Read
// POST = Create
// PUT/PATCH = Update
// DELETE = DELETE

// example 1
const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
getPosts();
// example 2
// const createPost = async () => {
//   try {
//     const newPost = {
//       author: "Olha",
//       body: "Learning CRUD with async/await!",
//     };
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json; charset=UTF-8" },
//       body: JSON.stringify(newPost),
//     });
//     const post = await response.json();
//     console.log("Created:", post);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// };
// createPost();

// example 3
// async function updatePost(postId, updatedData) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedData),
//       }
//     );

//     const data = await response.json();
//     console.log("Оновлений пост (PUT):", data);
//     return data;
//   } catch (error) {
//     console.error("Помилка при оновленні поста:", error);
//   }
// }
// updatePost(57, {
//   userId: 57,
//   id: 57,
//   title: "new title",
//   body: "new text",
// });

// example 4

// async function patchPost(postId, updatedFields) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${postId}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedFields),
//       }
//     );

//     const data = await response.json();
//     console.log("Частково оновлений пост (PATCH):", data);
//     return data;
//   } catch (error) {
//     console.error("Помилка при частковому оновленні поста:", error);
//   }
// }

// patchPost(1, {
//   title: "Тільки новий заголовок",
// });
// example 5
async function deletePost(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log(`Пост з id=${postId} видалений`);
    } else {
      console.error("Не вдалося видалити пост");
    }
  } catch (error) {
    console.error("Помилка при видаленні поста:", error.message);
  }
}

deletePost(100);
