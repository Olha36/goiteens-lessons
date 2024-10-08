// Функція для отримання контактів з localStorage
// 1. використати метод для отримання даних з локального сховища, отримувати контакти і помістити це все в змінну.
// 2. якщо в локальному сховищі є дані, то повернути обєкт джаваскрипт контактів. Для цього їх треба розпарсити. Якщо контактів немає, повернути пустий масив. Дану задачу можна робити за допомогою тернарного оператора або умовних виразів

// Функція для збереження контактів в localStorage
// Як це зробити:
// Ми будемо зберігати дані у localStorage:

// Для цього використовуємо метод localStorage.setItem().
// Він приймає два аргументи: перший — ключ (назва, за якою ми зберігаємо дані), а другий — самі дані, які ми хочемо зберегти.
// Дані, які передаються в localStorage, повинні бути у вигляді рядка (string):

// Тому ми використовуємо метод JSON.stringify(), щоб перетворити масив контактів у рядок формату JSON.

// Функція для відображення списку контактів
// Як це зробити:
// Ми створюємо список для відображення контактів:

// Використовуємо document.getElementById() для того, щоб знайти HTML-елемент <ul> або <ol>, у якому будуть відображатися наші контакти.
// Очищаємо список перед відображенням:

// Щоб уникнути дублювання контактів, перед кожним відображенням очищаємо список за допомогою contactList.innerHTML = '';.
// Отримуємо контакти з localStorage:

// Викликаємо функцію getContacts(), щоб отримати список контактів.
// Виводимо кожен контакт на екран:

// За допомогою методу forEach() проходимо по кожному контакту і створюємо новий елемент списку <li> для кожного.
// Використовуємо document.createElement('li'), щоб створити новий HTML-елемент.
// Заповнюємо цей елемент інформацією про ім'я, прізвище, телефон і email контакту, а також додаємо кнопки "Edit" і "Delete".
// Додаємо кнопки редагування та видалення:

// Додаємо дві кнопки в кожен елемент списку: одну для редагування (editContact), іншу для видалення (deleteContact), передаючи їм індекс поточного контакту.

// Функція для додавання або редагування контакту
// Як це зробити:
// Захищаємо форму від перезавантаження сторінки:

// Використовуємо event.preventDefault() для того, щоб браузер не перезавантажував сторінку після відправлення форми.
// Отримуємо дані з полів форми:

// Використовуємо document.getElementById().value, щоб отримати введені користувачем дані (ім'я, прізвище, телефон, email).
// Отримуємо індекс контакту:

// Якщо індекс порожній (''), це означає, що ми додаємо новий контакт. Якщо індекс є (число), це означає, що ми редагуємо наявний контакт.
// Створюємо новий об'єкт контакту:

// Створюємо об'єкт newContact, у якому зберігаються всі дані про контакт (ім'я, прізвище, телефон, email).
// Додаємо новий контакт або редагуємо існуючий:

// Якщо індекс порожній, додаємо новий контакт у список за допомогою contacts.push(newContact).
// Якщо індекс не порожній, замінюємо наявний контакт у списку на новий, використовуючи contacts[parseInt(index)] = newContact.
// Зберігаємо контакти і оновлюємо список:

// Викликаємо saveContacts(), щоб зберегти оновлений список контактів у localStorage.
// Потім викликаємо renderContacts(), щоб відобразити оновлений список контактів.
// Очищаємо форму після збереження:

// Після збереження або редагування контакту, очищаємо форму за допомогою contactForm.reset() і обнуляємо поле індексу (index), щоб підготувати форму для додавання нового контакту.

// Функція для редагування контакту
// Як це зробити:
// Отримуємо список контактів:

// Викликаємо функцію getContacts(), щоб отримати масив контактів.
// Отримуємо потрібний контакт за індексом:

// Використовуємо індекс, який ми передаємо у функцію, щоб знайти потрібний контакт у масиві.
// Заповнюємо поля форми даними контакту:

// Заповнюємо поля форми (ім'я, прізвище, телефон, email) значеннями відповідного контакту, щоб користувач міг їх змінити.
// Зберігаємо індекс контакту у приховане поле:

// Зберігаємо індекс контакту у приховане поле index, щоб знати, який контакт треба оновити після редагування.

// Функція для видалення контакту
// Як це зробити:
// Отримуємо список контактів:

// Викликаємо функцію getContacts().
// Видаляємо контакт із масиву:

// Використовуємо метод splice(), щоб видалити контакт із масиву за індексом. splice(index, 1) видаляє один елемент з масиву починаючи з даного індексу.
// Зберігаємо оновлений список:

// Викликаємо saveContacts(), щоб зберегти оновлений список контактів у localStorage.
// Оновлюємо список на екрані:

// Викликаємо renderContacts(), щоб оновити відображення контактів після видалення.

// Подія для збереження контакту

// Відображаємо контакти при завантаженні сторінки
function getContact() {
  const contacts = localStorage.getItem('contacts')
  if (contacts) {
      return JSON.parse(contacts)
  } else {
      return []
  }
}

function saveContact(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}


function renderContact() {
  console.log('render');

  const contactList = document.getElementById('contactList')
  contactList.innerHTML = '';
  const contacts = getContact()
  contacts.forEach((contact, index) => {
      const li = document.createElement('li')
      li.innerHTML = `${contact.firstName}, ${contact.lastName}, ${contact.phoneNumber}, ${contact.email} 
  <button type="submit" onclick="editContact(${index})">Edit Contact</button> 
  // <button type="submit" onclick="">Delete Contact</button> 
  `
      contactList.appendChild(li)
  })
}
function saveContacts(event) {
  event.preventDefault()
  const inputFirstName = document.querySelector('#firstName').value
  const inputLastName = document.querySelector('#lastName').value
  const inputPhone = document.querySelector('#phone').value
  const inputEmail = document.querySelector('#email').value
  console.log(inputFirstName, inputLastName, inputEmail, inputPhone)
  const localStorageContacts = {
      firstName: inputFirstName,
      lastName: inputLastName,
      phoneNumber: inputPhone,
      email: inputEmail
  }
  const contact = getContact()
  contact.push(localStorageContacts)
  saveContact(contact)
  renderContact()
}

function editContact() {
  console.log('editContact');

}
console.log('edit')
// console.log(getContact()) 

// function deleteContact (){ 
//     splice() 
//     console.log(saveContact()) 
//     console.log(renderContact()) 
// } 
// console.log(getContact()) 
document.getElementById('contactForm').addEventListener('submit', saveContacts)