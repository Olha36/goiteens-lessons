Виконати наступне завдання для зміни стилів при прокрутці списку
Створіть HTML-сторінку, що містить список з 10 елементів li. Кожен елемент li містить картинку та назву фрукту.
<ul class="fruits-list">
  <li>
    <img src="fruit1.jpg" alt="Fruit 1">
    <h3>Fruit 1</h3>
  </li>
  <li>
    <img src="fruit2.jpg" alt="Fruit 2">
    <h3>Fruit 2</h3>
  </li>
  <!-- Додайте інші елементи li для інших фруктів -->
</ul>


Використовуючи CSS, розташуйте кожен елемент li в рядок, так щоб вони займали всю ширину сторінки та мали однакову ширину та висоту.
.fruits-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}

.fruits-list li {
  flex-basis: calc(33.33% - 10px);
  margin-bottom: 20px;
  position: relative;
}

.fruits-list img {
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
}

.fruits-list h3 {
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  font-size: 20px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}


Використайте JavaScript та IntersectionObserver, щоб додати анімацію для кожного елемента li, коли він входить в зону видимості користувача. Конкретно, коли елемент входить в зону видимості, його картинка змінюється на іншу (можливо, зображення з вищою якістю), а назва фрукту змінює свій колір.
Коли елемент виходить з зони видимості, картинка та назва фрукту знову змінюються на початкові значення.