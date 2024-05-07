// example 1

// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
//  });

//  promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

//example 2
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
//  };

//  fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// example 3
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000);
// });
// promise.then(console.log);

//task 1
// Напишіть функцію, яка повертає проміс, який виконується через певний час (наприклад, 2 секунди) і повертає повідомлення "Проміс виконано".
// const promise = new Promise((resolve, reject) => {
//   setInterval(() => {
//     resolve("Проміс виконано");
//   }, 2000);
// });
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// task 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pairedArr = [2, 4, 6, 8, 10]

// const promise = new Promise((resolve, reject) => {
//   pairedArr.forEach((num) => {
//     if (num % 2 == 0) {
//       resolve("paired numbers:", num);
//     } else {
//       reject("Є непарні числа");
//     }
//   });
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// task 3
// 

// async function logMovies() {
//   const response = await fetch("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Ffreeform%2Fp%2FCvz1__1uqdC%2F&psig=AOvVaw00nKOZROCeAiI2GIJ4tW1M&ust=1715102513914000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCfju3E-YUDFQAAAAAdAAAAABAE");
//   const movies = await response.json();
//   console.log(movies);
// }
// logMovies()

async function logMovies() {
  const response = await fetch("http://example.com/movies.json", {
    mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  // const movies = await response.json();
  // console.log(movies);
  console.log(response);
}
logMovies()

