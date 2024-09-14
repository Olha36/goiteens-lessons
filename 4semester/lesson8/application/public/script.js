// Підключити обробник подій по завантаженню контенту
document.addEventListener('DOMContentLoaded', () => {
  // знайти форму та табличку
  const studentForm = document.querySelector('#student-form');
  console.log(studentForm);

  const studentsTable = document.querySelector('#students-table');
  console.log(studentsTable);


  // прописати функцію для знаходження студентів
  function findStudents() {
    // отримати дані з файлу джейсон
    fetch('/students')
      .then((response) => response.json())
      .then((students) => {
        studentsTable.innerHTML = ''; // Очищення таблиці перед оновленням
        students.forEach((student, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
                       <td>${student.name}</td>
                       <td>${student.surname}</td>
                       <td>
                           <button onClick="deleteStudents(${index})">Delete</button>
                       </td>
                   `;
          studentsTable.appendChild(row);
        });
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }

  // Прописати функцію для додавання студентів
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Заборонити перезавантаження форми за замовчуванням

    // Створити об'єкт з даними форми
    const student = {
      name: studentForm.name.value,
      surname: studentForm.surname.value,
    };

    // Надіслати POST-запит для додавання нового студента
    fetch('/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
      .then((response) => {
       // studentForm.reset(); // Очистити форму
        findStudents(); // Оновити список студентів після додавання
        console.log('Status code:', response.status);
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  });

  findStudents(); // Завантажити список студентів при завантаженні сторінки
});
