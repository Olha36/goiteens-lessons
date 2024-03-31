//example 1
// const json = `{
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "When the Fire Nation Attacked",
//     "author": "Nickelodeon",
//     "released": "02-21-2005"
//   }
// }`



// const data = JSON.parse(json);
// console.log(data); 





//task 1
// const book = `{
//   "name": "Harry Potter",
//   "author": "J.K Rowling",
//   "year": 1997,
//   "genre": "fantasy"
// }`

// const checkJson = JSON.parse(book);
// console.log(checkJson);

//task 2
// const name = prompt('Enter your name');
// const age = prompt('Enter your age');

// const data = {
//   "name": name,
//   "age": parseInt(age)
// }
// // console.log(data);

// const transformIntoJson = JSON.stringify(data);
// // console.log(transformIntoJson);

// const checkJson = JSON.parse(transformIntoJson);
// console.log(checkJson);

//task3

// const jsonData = `{
//   "name": "Kate",
//   "surname": "Willows",
//   "birthYear": 1998,
//   "group": 15,
//   "grades": [90, 40, 85, 100]
// }`

// function jsObject() {
//   const object = JSON.parse(jsonData);
//   return object;
// }

// const result = jsObject();
// console.log(result);


// const jsonData = `{
//   "name":"Pizza",
//   "description":"tomatoes, mushrooms, cheese, chicken",
//   "price":120,
//   "ingredients":["tomatoes","mushrooms","cheese","chicken"]
// }`

// const checkJson = JSON.parse(jsonData);
// console.log(checkJson);

const film = `{
  "name": "Titanic",
  "year": 1997,
  "producer": "James Kameron",
  "genre": "drama",
  "actors": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
}`

const transform = JSON.parse(film);
console.log(transform);

const intoJson = JSON.stringify(transform);
console.log(intoJson);