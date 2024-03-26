1. Основні завдання
	1. Створити пустий об’єкт myArray. Додати в властивості name, age, city, occupation. Замінити на вибір значення властивостей.
2. Продемонструвати в консолі, що отримуємо, якщо властивості не існує.
3. Короткі властивості
let name = 'Resort Hotel';
let stars = 5;
// Цей ES5 запис надлишковий
const es5hotel = {
  name: name,
  stars: stars,
  capacity: 100,
};
/*
 * ES6 Shorthand properties
 * Ім'я ключа буде аналогічно імені змінної
 * Значення властивості буде дорівнювати значенню змінної
 */
const es6hotel = {
  name,
  stars,
  capacity: 100,
};
console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}
4. До об’єкту myArray додати методи increaseAge(age), який буде отримувати число та збільшувати вік на це число.
До об’єкту myArray додати методи changeOccupation(position), який буде отримувати посаду та змінювати властивість occupation.

2. Додаткові завдання
Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.
Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.
Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.
Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.
Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"
3. Творчі завдання
Працюємо з колекцією товарів в кошику:
Написати методи вказані нижче в коді
{ name: '🍎', price: 50 }
{ name: '🍇', price: 70 }
{ name: '🍋', price: 60 }
{ name: '🍓', price: 110 }

const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };

4. Супертворчі завдання
Учні можуть додати роботу з DOMом до попередньої задачі
     /* стилі для розмітки */
    .cart {
      border: 1px solid black;
      padding: 10px;
      width: 300px;
      margin: 20px;
    }


    .cart h2 {
      text-align: center;
    }


    .cart button {
      margin: 5px;
    }


    .cart .items {
      list-style-type: none;
      padding-left: 0;
    }


    .cart .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }


    .cart .item button {
      margin: 0;
      padding: 0;
      font-size: 14px;
      background-color: white;
      border: none;
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }


    .cart .item button:hover {
      color: red;
    }
    <div class="cart">
    <h2>Кошик товарів</h2>
    <ul class="items"></ul>
    <button class="add">Додати товар</button>
    <button class="clear">Очистити кошик</button>
    <button class="increase">Збільшити кількість товару</button>
    <button class="decrease">Зменшити кількість товару</button>
    <button class="remove">Видалити товар</button>
  </div>
