Показати приклади 1-2

Створити функцію яка обробляє зняття грошей з особового рахунку в банку. Функція отримує суму для зняття і поточний баланс рахунку, після чого в залежності від умови, виконує той чи інший блок коду.


1. Продемонструвати код створення функцій (expression and declaration). Приклади можна використати з конспекту.
const add = function(a, b, c) {
    return a + b + c;
  };
2. Розібрати наступний код 

// a, b, c це параметри
const add = function(a, b, c) {
    return a + b + c;
  }; 
  // 1, 2, 3 це аргументи
  const result = add(1, 2, 3);
  console.log(result); // 6
   // 5, 10, 15 це аргументи
  console.log(add(5, 10, 15)); // 30

3. Розібрати приклад з конспекту про послідовність виконання коду
const fnA = function() {
    console.log('Почала виконуватися [fnA]');
    fnB();
    console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
  };
 
  const fnB = function() {
    console.log('Виконується [fnB]');
  };
 
  console.log('Почав виконання [main]');
  fnA();
  console.log('Продовжив виконуватися [main] після виходу з [fnA]');
 
  /*
   * Почав виконання [main]
   * Почала виконуватися [fnA]
   * Виконується [fnB]
   * Продовжила виконуватися [fnA] після виходу з [fnB]
   * Продовжила виконуватися [main] після виходу з [fnA]
   */
4. Розібрати Наступний код 
 const sum = function() {



    let total = 0; 
    for (const argument of arguments) {
      total += argument;
    } 
    return total;
  }; 
  console.log(sum(1, 2, 3)); //  6
  console.log(sum(1, 2, 3, 4)); //  10
  console.log(sum(1, 2, 3, 4, 5)); //  15
const args = Array.from(arguments);
5. 
add(1, 2, 3); // 6
print('text'); // text
function add(a, b, c) {
  return a + b + c;
}
function print(str) {
  console.log(str);
}

2. Додаткові завдання
1. Напиши функцію яка повертає середнє значення з масиву чисел:
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX

 У цій функції ми передаємо масив чисел в якості параметру, обчислюємо їхню суму та повертаємо середнє значення.

`Напиши функцію яка повертає буль як результат перевірки числа на парність:`

console.log(isEven(4)); // true
console.log(isEven(3)); // false
 У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

`Напиши функцію яка повертає найбільше число в масиві:`
let array = [1, 3, 2, 5, 4];
let max = findMaxNumber(array);
console.log(max); // 5
 У цій функції ми проходимо по масиву чисел та знаходимо найбільше число. Його повертаємо як результат функції.

Напиши функцію яка повертає факторіал числа:

function factorial(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
 
  console.log(factorial(5)); // 120
3. Творчі завдання
1. Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”. 
2. Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»). 
3. Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу.  
4. Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
Myaveragescore: A (якщо середня оцінка від 91 до 100)
My average score: B (якщо середня оцінка від 81 до 90)
My average score: C (якщо середня оцінка від 71 до 80)
My average score: D (якщо середня оцінка від 70 і менше)
Для перевірки:
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
