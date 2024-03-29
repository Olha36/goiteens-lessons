let name = 'Resort Hotel';
let stars = 5;
let weather = 'warm';


// let age = 15;

// age = 20

const myArray = {
  age: 15,
  city: "Zhytomyr",
  occupation: "developer",
  name: name,
  stars: stars,
  finishedGraduation: true,
  weatherWarm: weather,
  increaseAge: function(age2) {
    this.age += age2;
  }
}
// console.log(myArray.city, myArray.age);
myArray.increaseAge(50);
console.log(myArray.age);

// myArray.occupation = "student";
// console.log(myArray);




// const greeting = () => {
//   console.log('hello')
// }
// greeting()
// console.log(myArray.weather)

// const person = {
//   name: "Katya",
//   age: 15,
//   gender: "female",
//   
// }

// const students = [
//   {
//     name: "Katya",
//     age: 15,
//     gender: "female",
//     grade: 95
//   },
//   {
//     name: "Nastya",
//     age: 16,
//     gender: "female",
//     grade: 45
//   },
//   {
//     name: "Masha",
//     age: 15,
//     gender: "female",
//     grade: 75
//   }
// ]


// const book = {
//   title: 'Harry Potter',
//   author: 'J.K. Rowling',
//   year: 2010,
//   genre: 'fantasy'
// }
