Основні завдання
1. Продемонструвати роботу методів Object.keys(), Object.values(), Object.entries().
2. Розібрати наступний код
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };
 


  const allKeys = Object.keys(feedback);
  console.log(allKeys);


// feedback.good
// feedback['good'];
// feedback['neutral'];
// feedback['bad'];


let total = 0;
  for (const key of allKeys) {
    // console.log(feedback[key]);
    total += feedback[key]
  }


console.log(total);


const values = Object.values(feedback);
console.log(values);


for (const value of values) {
  console.log(value);
  total += value;
}


const entries = Object.entries(feedback)
console.log(entries);
Продемонструвати та розібрати роботу розпилання на прикладі. Спочатку методом concat() gjnsv …spread
const numbers1 = [1, 2, 3, 54, 12];
const numbers2 = [5, 65, 32, 14];
// const numbers = numbers1.concat(numbers2);
const numbers = [...numbers1, 15, 34, ...numbers2];
console.log(numbers);//[1, 2, 3, 54, 12, 15, 34, 5, 65, 32, 14]
Розібрати наступний приклад
 /*
   * Пошук найнижчої або найвищої температури (числа)
   */
  const temps = [18, 14, 12, 21, 17, 29, 24];
  const lowestTemp = Math.min()
  const hightTemp = Math.max()
   // console.log(lowestTemp);
  // console.log(hightTemp);
