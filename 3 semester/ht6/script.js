import users from "./users.js";

// console.log(users)

// //task 1 Отримати масив імен всіх користувачів (поле name).
// const getUserNames = users => {
//   // твій код
//   users.forEach((user) => {
//     console.log(user.name);
//   })
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2 Отримати масив об'єктів користувачів за кольором очей (поле
// eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   // твій код
//  return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'brown'));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//task 3 Отримати масив імен користувачів за статтю (поле gender).

// const getUsersWithGender = (users, gender) => {
//   // твій код
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };

// console.log(getUsersWithGender(users, "female")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//task 4 Отримати масив тільки неактивних користувачів (поле isActive).

// const getInactiveUsers = users => {
//   // твій код
//   return users.filter(user => !user.isActive)
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

//task 5 Отримати користувача (не масив) по email (поле email, він 
// унікальний).

// const getUserWithEmail = (users, email) => {
//   // твій код
// //  return users.find(user => user.email === email);
// return users.find(user => user);
 
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

//task 6 Отримати масив користувачів, які потрапляють у вікову категорію від min до
//  max років (поле age).

// const getUsersWithAge = (users, min, max) => {
//   // твій код
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// task 7 Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = users => {
//   // твій код
// };

// console.log(calculateTotalBalance(users)); // 20916

// task 8 Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) => {
//   // твій код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task 9 Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твій код
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10 Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має
// бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const getSortedUniqueSkills = users => {
//   // твій код
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
