Створіть веб-додаток блогу, який дозволяє користувачам створювати, переглядати, оновлювати та видаляти пости. 
Інструкції:
`1. Використовуйте Node.js для створення сервера.`
* npm init -y
* npm install express
* create server.mjs file and fill it
* check on port 3000 running node server.mjs
`2. Використовуйте json-server для створення серверу та обробки запитів.`
`how to do this task`
    * npm install json-server
    * create db.json
    * npx json-server db.json
    * curl http://localhost:3000/posts/1   (enter into terminal)
`3. Використовуйте пакетний менеджер npm для управління залежностями та інсталяції необхідних пакетів. Для збирання проєкту ініціалізуйте новий проєкт та встановіть Parcel.`
    * npm install --save-dev parcel
    * npx parcel index.html
`4. Використовуйте шаблонізатор Handlebars для відображення сторінок блогу.`
`5. Використовуйте bd.json для зберігання даних про пости та коментарі.`
6. Реалізуйте механізм пагінації для перегляду списку постів. Рекомендується використати будь яку бібліотеку.
`7. Застосуйте асинхронні функції та async/await та try…catch для обробки асинхронних операцій, таких як завантаження та збереження даних. `
8. Використовуйте REST API для взаємодії з бекендом та виконання CRUD-операцій.
9. Застосуйте AJAX для асинхронного завантаження даних без перезавантаження сторінки.
10. Забезпечте можливість користувачам додавати, оновлювати та видаляти свої пости.
11. Додайте можливість коментувати пости та відображати коментарі на сторінці поста.
12. Додайте функцію пошуку для знаходження постів за ключовими словами.


body{
  background-image: url('https://images.unsplash.com/photo-1534310808879-0239eaced87a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjYyMDQ0Mw&ixlib=rb-1.2.1&q=85');
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   height:100vh;
   width:100vw;
   overflow: hidden;
   position:relative;
 }
 .outer{
   width: 500px;
   position:absolute;
   animation: floatup 20s linear infinite, sideways 20s linear infinite, change 10s linear infinite alternate;
 }
 .box {
   width: 500px;
   display: flex;
   perspective: 500px;
   margin-right:100px;
 }
 
 .box::before,
 .box::after {
   content: "";
   padding-top: 56%;
   flex: 1;
  background-image: url("https://assets.codepen.io/2433992/butterfly.png");
   background-size: 200% 100%;
   animation: left 0.5s linear infinite alternate;
   transform-origin: right;
 }
 
 .box::after {
   background-position: right;
   animation-name: right;
   transform-origin: left;
 }
 
 @keyframes left {
   from {
     transform: translateZ(80px) rotateY(-10deg)
   }
   to {
     transform:translateZ(0px) rotateY(50deg) 
   }
 }
 
 @keyframes right {
   from { 
     transform: translateZ(80px) rotateY(10deg)
   }
   to {
     transform:translateZ(0px) rotateY(-50deg) 
   }
 }
 
 @keyframes flutter {
   from{ 
     margin-left: 0;
     margin-top:100%; 
     }
   to{
     margin-left: 100%;
     margin-top:0;
     }
   }
 
 @keyframes floatup{
   0% {top: 100%;}
   /* 50% {top: (random(100) * 1%);} */
   100% {top:-300px;}
 }
 @keyframes sideways{
   /* from {left: (random(100) * 1px);}
   50%{left: (random(100) * 1%);} */
   to{left: (random(100) * 10px);}
 }
 @keyframes change{
   from {transform: rotate((random(5) * 5deg));}
   to {transform: rotate(45deg);}
 }
 