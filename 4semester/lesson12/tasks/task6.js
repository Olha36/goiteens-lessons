function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Promise виконано успішно");
      } else {
        reject(new Error("Помилка в промісі"));
      }
    }, Math.random() * 1000);
  })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Робота з промісом завершена");
    })
}
randomPromise();

module.exports = {
  randomPromise,
};
