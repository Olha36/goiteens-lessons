// const myArray = {
//   age: 15,
//   city: "Zhytomyr",
//   occupation: "developer",
//   name:"Katya",
//   stars: 5,
//   finishedGraduation: true,
//   weatherWarm: 'Warm',
//   increaseAge: function(age2) {
//     this.age += age2;
//   }
// }
// myArray.increaseAge(50);
// console.log(myArray.age);
// console.log(Object.entries(myArray))
// let arr = [1, 2, 3, 54, 5];

// let max = Math.max(...arr);
// console.log(max);



// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };



// const allKeys = Object.keys(feedback);
// console.log(allKeys);


//allKeys = ['good', 'neutral', 'bad']

// // console.log(feedback.good)
// console.log(feedback['good']);
// console.log(feedback['neutral']);
// console.log(feedback['bad']);

// let total = 0;
//   for (const elem of allKeys) {
//     // console.log(feedback[key]);
//     total += feedback[elem]
//   }


// console.log(total);

const temps = [18, 14, 12, 21, 17, 29, 24];
// const lowestTemp = Math.min(...temps)
const hightTemp = Math.max(...temps);
// console.log(lowestTemp);
console.log(hightTemp);