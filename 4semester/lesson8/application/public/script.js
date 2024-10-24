document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-form');
  const tableBody = document.getElementById('students-table').getElementsByTagName('tbody')[0];
  const editForm = document.getElementById('editForm');
  let currentEditIndex = null;

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
      fetch('/students')
          .then(response => response.json())
          .then(students => {
              const student = students[index];
              currentEditIndex = index;

              // Заповнення форми редагування
              editForm.style.display = 'block';
              document.getElementById('editName').value = student.name;
              document.getElementById('editSurname').value = student.surname;
              document.getElementById('editAge').value = student.age;
              document.getElementById('editCourse').value = student.course;
              document.getElementById('editFaculty').value = student.faculty;
              document.getElementById('editSubjects').value = student.subjects;
          });
  };

  // Збереження зміненого студента
  window.saveStudent = () => {
      const updatedStudent = {
          name: document.getElementById('editName').value,
          surname: document.getElementById('editSurname').value,
          age: document.getElementById('editAge').value,
          course: document.getElementById('editCourse').value,
          faculty: document.getElementById('editFaculty').value,
          subjects: document.getElementById('editSubjects').value
      };

      fetch(`/students/${currentEditIndex}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedStudent)
      }).then(() => {
          editForm.style.display = 'none';
          loadStudents();
      });
  };

  // Завантаження студентів при завантаженні сторінки
  loadStudents();
});
