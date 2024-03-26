// let name = 'Resort Hotel';
// let stars = 5;

// const myArray = {
//   age: 25,
//   city: "Zhytomyr",
//   occupation: "developer",
//   name: name,
//   stars: stars,
//   increaseAge: function(age) { // Додав метод increaseAge до об'єкту myArray
//     this.age += age;
//   },
//   changeOccupation: function(position) {
//     this.occupation = position;
//   }
// }

// myArray.increaseAge(15);
// myArray.changeOccupation('teacher')
// console.log(myArray.age);
// console.log(myArray.occupation);


// const person = {
//   name: "Katya",
//   age: 15,
//   gender: "female",
//   showValues: function(name2, age2, gender2) {
//     this.name = name2;
//     this.age = age2;
//     this.gender = gender2;
//   }
// }
// person.showValues("Vasya", 17, "male")
// console.log(person.age);

const students = [
  {
    name: "Katya",
    age: 15,
    gender: "female",
    grade: 95
  },
  {
    name: "Nastya",
    age: 16,
    gender: "female",
    grade: 45
  },
  {
    name: "Masha",
    age: 15,
    gender: "female",
    grade: 75
  }
]

const averageScore = (students) => {
  console.log(students.grade);

}
averageScore()