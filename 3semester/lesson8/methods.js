let string = "hello world";
// ['hello world']
// ['hello', 'world']
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

let splitString = string.split("");
// console.log(splitString);

let joinString = splitString.join("");
// console.log(joinString);

let reversedString = string.split(" ").reverse().join(" ");
// console.log(reversedString);

let arr = ["hello", "test", "world"];
let reversedArr = arr.reverse();
// console.log(reversedArr);

// indexOf method
let arrNumbers = [1, 2, 3, 4, 5];
// console.log(arrNumbers.indexOf(4));
const students = ["Maksym", "Artem", "Maksym", "Tymofii", "Andrii", "Nikita"];

console.log(students.indexOf("Tymofii"));
let includesMeth = students.includes("Vasia");
console.log(includesMeth);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
