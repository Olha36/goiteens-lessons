document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-form');
  const tableBody = document.getElementById('students-table').getElementsByTagName('tbody')[0];

  // Функція для завантаження студентів
  const loadStudents = () => {
      fetch('/students')
          .then(response => response.json())
          .then(students => {
              tableBody.innerHTML = '';
              students.forEach((student, index) => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td>${student.name}</td>
                      <td>${student.surname}</td>
                      <td>${student.age}</td>
                      <td>${student.course}</td>
                      <td>${student.faculty}</td>
                      <td>${student.subjects}</td>
                      <td>
                          <button onclick="editStudent(${index})">Edit</button>
                          <button onclick="deleteStudent(${index})">Delete</button>
                      </td>
                  `;
                  tableBody.appendChild(row);
              });
          });
  };

  // Додавання студента
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const student = {
          name: form.name.value,
          surname: form.surname.value,
          age: form.age.value,
          course: form.course.value,
          faculty: form.faculty.value,
          subjects: form.subjects.value
      };

      fetch('/students', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
      }).then(() => {
          form.reset();
          loadStudents();
      });
  });

  // Видалення студента
  window.deleteStudent = (index) => {
      fetch(`/students/${index}`, {
          method: 'DELETE'
      }).then(() => {
          loadStudents();
      });
  };

  // Оновлення студента
  window.editStudent = (index) => {
      const student = {
          name: prompt("Ім'я"),
          surname: prompt("Прізвище"),
          age: prompt("Вік"),
          course: prompt("Курс"),
          faculty: prompt("Факультет"),
          subjects: prompt("Курси")
      };

      fetch(`/students/${index}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
      }).then(() => {
          loadStudents();
      });
  };

  // Завантаження студентів при завантаженні сторінки
  loadStudents();
});
