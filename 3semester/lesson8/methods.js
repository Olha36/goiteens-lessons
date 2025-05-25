let string = "hello world";
// ['hello world']
// ['hello', 'world']
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// SPLIT METHOD

let splitString = string.split("");
// console.log(splitString);

// JOIN
let joinString = splitString.join("");
// console.log(joinString);

let reversedString = string.split(" ").reverse().join(" ");
// console.log(reversedString);

// REVERSE
let arr = ["hello", "test", "world"];
let reversedArr = arr.reverse();
// console.log(reversedArr);

//INDEXOF
// indexOf method
let arrNumbers = [1, 2, 3, 4, 5];
// console.log(arrNumbers.indexOf(4));
const students = ["Maksym", "Artem", "Maksym", "Tymofii", "Andrii", "Nikita"];

// console.log(students.indexOf("Tymofii"));
let includesMeth = students.includes("Vasia");
// console.log(includesMeth);

// PUSH - додає елемент в кінець масиву і повертає довжину масиву. Змінює оригінальний масив.

let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

let pushedEl = arr1.push("hello"); // [1, 2, 3, 4, 5, 'hello] -> 6
// console.log(pushedEl); // 6
// console.log(arr1);

let arr2 = [6, 7, 8, 9, 10];

// POP - видаляє останній елемент з масиву і повертає його. Змінює оригінальний масив.
let arrAnimals = ["cat", "dog", "fish", "bird"];
let poppedEl = arrAnimals.pop(); // bird

// console.log(arrAnimals.pop()); // cat, dog, fish

// console.log(poppedEl); // bird
// console.log(arrAnimals.pop());

// console.log(arrAnimals.pop());
// console.log(arrAnimals);

// UNSHIFT - додає елемент в початок масиву і повертає довжину масиву. Змінює оригінальний масив.
let arrFruits = ["apple", "banana", "orange"];
let addEl = arrFruits.unshift(true);
// console.log(addEl);
// console.log(arrFruits);

// SHIFT - видаляє перший елемент з масиву і повертає його. Змінює оригінальний масив.
let arrFruits2 = ["apple", "banana", "orange"];
// console.log(arrFruits2);

let deletedEl = arrFruits2.shift();
// console.log(deletedEl);
// console.log(arrFruits2.shift());
// console.log(arrFruits2.shift())
// console.log(arrFruits2);

// SLICE - повертає новий масив, який містить елементи з початкового масиву, починаючи з індексу start і закінчуючи індексом end (не включно). Не змінює оригінальний масив.
//  позитивні індекси повертають елементи зліва на право, негативні індекси повертають елементи справа на ліво .
const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(1));
// console.log(animals.slice(1, 3));
// console.log(animals.slice(-4));
// console.log(animals);


// SPLICE // змінює оригінальний масив, видаляє елементи з масиву і додає нові елементи в масив
const months = ["Jan", "March", "April", "June"];
let addFeb = months.splice(2, 2, "Feb"); // 1, => позиція, 0-> скільки елементів видалити "Feb" -> що додати

// console.log(months);

// CONCAT
let numbersArr1 = [1, 2, 3];
let numbersArr2 = [4, 5, 6];
let numbersArr3 = [7, 8, 9];
let numbersArr4 = [10, 11, 12];

// let concatArr1 = numbersArr1.concat(numbersArr2)
// console.log(concatArr1);
// let deletedFive = concatArr1.splice(4, 1)
// console.log(deletedFive);
// console.log(concatArr1);

console.log(numbersArr1.concat(numbersArr2, numbersArr3, numbersArr4));




