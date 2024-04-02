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

// console.log(json)

// const data = JSON.parse(json);
// console.log(data); 

// const stringify = JSON.stringify(data);
// console.log(stringify);



//task 1
// const book = `{
//   "name": "Harry Potter",
//   "author": "J.K Rowling",
//   "publicationYear": 1997,
//   genre": "fantasy"
// }`
// console.log(book);

// const checkJson = JSON.parse(book);
// console.log(checkJson);

//task 2
const name = prompt('enter your name');
const age = prompt('enter your age');

const json = `{
  "name": name,
  "age": parseInt(age)
}`;
console.log(JSON.parse(json));

//task3

// const jsonData = `{
//   "name": "Kate",
//   "surname": "Willows",
//   "birthYear": 1998,
//   "group": 15,
//   "grades": [90, 40, 85, 100]
// }`


//task4

// const jsonData = `{
//   "name":"Pizza",
//   "description":"tomatoes, mushrooms, cheese, chicken",
//   "price":120,
//   "ingredients":["tomatoes","mushrooms","cheese","chicken"]
// }`


//task 5