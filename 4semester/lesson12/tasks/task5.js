// task 5
function addNumbers(a, b) {
  return a + b;
}

const promise = new Promise((resolve, reject) => {
  resolve(addNumbers(5, 15));
  reject("error");
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
};
