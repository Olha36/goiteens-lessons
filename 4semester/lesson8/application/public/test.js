
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('student-form');
//     const tableBody = document.getElementById('students-table').getElementsByTagName('tbody')[0];
//   //   const editForm = document.getElementById('editForm');
//   //   let currentEditIndex = null;
  
//     // Функція для завантаження студентів
//     const loadStudents = () => {
//         fetch('/students')
//             .then(response => response.json())
//             .then(students => {
//                 tableBody.innerHTML = '';
//                 students.forEach((student, index) => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//                         <td>${student.name}</td>
//                         <td>${student.surname}</td>
//                         <td>${student.age}</td>
//                         <td>${student.course}</td>
//                         <td>${student.faculty}</td>
//                         <td>${student.subjects}</td>
//                         <td>
//                             <button onclick="editStudent(${index})">Edit</button>
//                             <button onclick="deleteStudent(${index})">Delete</button>
//                         </td>
//                     `;
//                     tableBody.appendChild(row);
//                 });
//             });
//     };
  
    
  
//     // Завантаження студентів при завантаженні сторінки
//     loadStudents();
//   });
  
  