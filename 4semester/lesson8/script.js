//example 1
const json = `{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "When the Fire Nation Attacked",
    "author": "Nickelodeon",
    "released": "02-21-2005"
  }
}`

console.log(json)

const parseMethod = JSON.parse(json);
console.log(parseMethod);



const jsonJs = {
    name: "Josh",
    weight: 175,
    age: 30,
    eyecolor: "brown",
}
console.log(jsonJs);

const jsonMethod = JSON.stringify(jsonJs);
console.log(jsonMethod);


// task 1
const dataBook = `{
    "name": "Harry Potter",
    "author": "J.K Rowling",
    "year": "1997",
    "genre": "fantasy"
}`
const parseDataBook = JSON.parse(dataBook);
console.log(parseDataBook);

// task 2
const name = prompt('Enter your name');

const age = prompt('Enter your age');


const userInfo = `{
    "name": "${name}",
    "age": "${age}"
}`

console.log(userInfo);

const check = JSON.parse(userInfo);
console.log(check);


