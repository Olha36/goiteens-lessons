`Основні завдання`
1. Розібрати, що таке бібліотеки (React js, Axios, React Native) та фреймворки (Vue js, Angular), плагіни. Яка різниця між ними.
2. Опрацювати документацію бібліотеки nanoid. Показати приклад використання (https://github.com/ai/nanoid#readme)
3. Опрацювати документацію бібліотеки Chart.js. Показати приклад використання.
4. Опрацювати документацію бібліотеки Basiclightbox. Показати приклад використання з конспекту.

`Додаткові завдання`
Створити простий список завдань з можливістю додавання, видалення та відмічення завдань як виконаних. Кожне завдання повинно мати унікальний ідентифікатор.

// 1. Створити HTML-структуру для списку завдань:


<div>
  <input type="text" id="taskInput">
  <button id="addTaskBtn">Add Task</button>
</div>
<ul id="taskList"></ul>

Підключити бібліотеку nanoid до проекту.
Створити функцію addTask для додавання нового завдання до списку в якій:
- Створюємо новий елемент списку
- Додаємо текст завдання до елементу списку
- Додаємо кнопки для видалення та відмічення завдання як виконаного
- Додаємо нове завдання до списку
- Очищаємо поле вводу
- Створити функцію deleteTask для видалення завдання зі списку
- Створити функцію markTaskDone для відмічення завдання як виконаного.
- Додати обробники подій для кнопок "Add Task" та "Enter" на полі вводу
- Додати стилі для елементів списку
 


li {
    margin-bottom: 10px;
  }
 
 
  .done {
    text-decoration: line-through;
  }
