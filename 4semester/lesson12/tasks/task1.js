//task 1 Напишіть функцію, яка повертає проміс, який виконується через певний час (наприклад, 2 секунди) і повертає повідомлення "Проміс виконано".
const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Проміс виконано");
  }, 2000);
});
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = {
    promise
  }