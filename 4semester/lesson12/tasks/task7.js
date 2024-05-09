function getRandomNumber(max, min) {
  return new Promise((resolve, reject) => {
    resolve(Math.floor(Math.random() * (max - min) + min))
    reject('"Помилка проміса"')
  })
  .then((value) => {
    console.log(value, value + 10);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Робота з промісом завершена");
  })
}
getRandomNumber(1, 100)
module.exports = {
  getRandomNumber
}