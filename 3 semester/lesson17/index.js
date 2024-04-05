//example 1
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((num1Prev, numNext) => num1Prev + numNext, 0);

// console.log(sum); 

// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(sum);
// }
//example 2
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// console.log(tweets[1].tags);
// // const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// // console.log(likes); // 32

// const countLikes = () => 
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0)

// console.log(countLikes(tweets));


//example 3
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);


//   return allTags;
// }, []);


// console.log(tags);


// // Напевно збір тегів не одиночна операція, тому напишемо функцію
// // для збору тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);


//     return allTags;
//   }, []);


// console.log(getTags(tweets));


//example 3
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];


// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);


//     return allTags;
//   }, []);


// const tags = getTags(tweets);


// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика якщо callback-функція досить велика.


// Якщо в об'єкті-акумуляторі acc немає свого властивості з ключем tag,
// то створюємо його і записує йому значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }


//   acc[tag] += 1;


//   return acc;
// };


// // Початкове значення акумулятора це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});


// const tagCount = countTags(tags);
// console.log(tagCount);

//example 4
// const numbers = [1, 2, 3, 4, 5];
// // // Відсортує по зростанню
// console.log('Before sort: ', numbers); 
// console.log('After sort: ', numbers.sort()); 


// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];


// Відсортує за алфавітом
// console.log('Before sort: ', clients); 
// console.log('After sort: ', clients.sort()); 

//example 5
// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];


// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;


// console.log(users.sort(sortByActiveDays));

//example 6
// const fruits = ['apple', 'orange', 'banana', 'pear'];


// fruits.sort(function(a, b) {
//   return a.localeCompare(b);
// });


// console.log(fruits); 

//example 7
//Є масив чисел, з нього необхідно взяти всі парні й помножити на 2, після чого ще й розгорнути масив
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const even = numbers.filter(x => x % 2 === 0);
// const doubled = even.map(x => x * 2);
// const reversed = doubled.reverse();
// console.log(reversed);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


// /*
//  * Фільтруємо парні числа. Далі, на результаті методу filter,
//  * Викликаємо map і множимо на 2. Після чого на результаті
//  * Методу map викликаємо reverse.
//  */


// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();


// console.log(result);

//task1
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const values = Object.values(salary);
const totalSalary = values.reduce((a, b) => a + b)


console.log(totalSalary);
