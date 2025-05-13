// while виконується якщо і поки умова правдива
// let a = 5;
// while(a < 5) {
//     a++;

const { log } = require("console");

//     console.log(a)
// }

// for виконується на кожній ітерації кілька раз
// let b = [1, 2, 3, 4, 5];
// for (let i = 0; i  <= b.length; i++) {
//     console.log(b[i]);

// }
// console.log(b);

// do...while виконається хоча б 1 раз, навіть якщо умва хибна
// let number = 10;
// do {
//     console.log(number);
//     number++;
// } while (number <= 15)  // правдива умова

// do {
//     console.log(number);
//     number--;

// } while (number >= 3)

// task 3
// let employees = 3;
// let totalSalary = 0;

// for (let i = 0; i < employees; i++) {
//   //ЗП кожного працівника це випадкове число від 500 до 5000.
//   let salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
//   // Math.floor(Math.random() * (максимум - мінімум + 1)) + мінімум

//   totalSalary += salary;
//   console.log(`ЗП працівника ${i + 1} = ${salary}`);
// }

// task 4

// let min = 0;
// let max = 5;

// let sum = 0;

// for(let i = min; i <= max; i++) {
//    if(i % 2 === 0) {
//     sum += i;
//     console.log(i);

//    }
//    `Сума всіх парних чисел від ${min} до ${max} = ${sum}`
// }

// task 5
// const ADMIN_PASSWORD = "admin123";
// let message = prompt("Введіть пароль адміністратора");

// if (message === null) {
//   console.log("Вхід скасовано");
// } else if (message !== ADMIN_PASSWORD) {
//   console.log("Доступ заборонено, невірний пароль");
// } else if (message === "") {
//   console.log("Введіть пароль адміністратора");
// } else {
//   console.log("Ласкаво просимо!");
// }


let cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"]
let deletCard = cards.splice(2, 1, "")
let newCard = cards.push("Карточка-6")
let restartCards = cards.splice(2,1,"Карточка-4")
alert(cards)

let mus = ["Карточка-1", "Карточка-2", "Карточка-3"];
let musPlus = mus.push("mango")
alert(mus)

let nus = ["Карточка-1", "Карточка-2", "Карточка-3"];
let musPlus2 = nus.unshift("pupupu")
alert(nus)

let mus6 = ["Карточка-1", "Карточка-2", "Карточка-3"];
let musMinus = mus6.pop()
alert(mus6)

let mus7 = ["Карточка-1", "Карточка-2", "Карточка-3"];
let musMinus2 = mus7.shift()
alert(mus7)

let mus1 = ["Карточка-1", "Карточка-2", "Карточка-3"];
let mus2 = ["Карточка-4", "Карточка-5"];
let mus3 = mus1.concat(mus2);
alert(mus3)

let mus4 = ["Карточка-1", "Карточка-2", "Карточка-3"];
alert(mus4.indexOf("Карточка-2"))

let mus5 = ["Карточка-1", "Карточка-2", "Карточка-3"];
alert(mus5.includes("Карточка-2"))







let Arr2 = ['Mango', 'Poly', 'Kivi', 'Ajax'];
alert(Arr2.join())
let string = "";
for (let i = 0; i < Arr2.length; i++){
    string += Arr2[i] + ","
}
alert(string)
