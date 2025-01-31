const myArray = {
  name: 'goIteens',
  age: 15,
  city: "Zhytomyr",
  occupation: "developer",
}
console.log(myArray.age, myArray.city, myArray.name);


const {age, city, occupation, name} = myArray;

console.log(age, city, occupation, name);