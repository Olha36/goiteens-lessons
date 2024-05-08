// task 4
const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Peter", age: 40 },
  { name: "Mary", age: 35 },
];

function getArrItems(array) {
  return array.map((arr) => arr.name).sort();
}

let promise = new Promise((resolve, reject) => {
  resolve(getArrItems(people));
  reject("error");
});

promise.then((value) => {
  console.log(value);
})
.catch((error) => {
  console.log(error);
})

module.exports = {
  getArrItems,
};
