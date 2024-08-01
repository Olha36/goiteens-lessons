

//Підключити обробник подіх по завантаженню контенту
document.addEventListener('DOMContentLoaded', () => {
// знайти формочку та табличку
const studentForm = document.querySelector('#student-form');
console.log(studentForm);

const studentsTable = document.querySelector('#students-table');
console.log(studentsTable);
// прописати функцію для знаходження студентів

function findStudents() {
// отримати дані з файлу джейсон
fetch('/students') 
   // вивести результат даних json
   .then(response => response.json())
      // вивести дані з джейсон файлу на екран
   .then(students => {
        studentsTable.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.surname}</td>

                <td>
                <button onClick="deleteStudents(${index}">Delete</button>
                </td>
            `
            studentsTable.appendChild(row)
    })
   })


// прописати функцію для додавання студентів
studentForm.addEventListener('submit', (e) => {
// додати обробник події на формочку при сабміті
   // заборонити оновлення форми за замовчуванням
   e.preventDefault();
   // треба створити обєкт, який буде отримувати дані з форми
   const students = {
    name: studentForm.name.value,
    surname: studentForm.surname.value
   }
   // отримати індекс кожного ключа оюєкту студентс, використати метод пут.
   fetch('/students', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(students)
   }).then(() => {
    studentForm.reset()
    findStudents();
   })
   // конвертувати дані обєкту студектс в джаваскрипт обєкт
})
   
}
findStudents() 
})
