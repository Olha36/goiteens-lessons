Створіть програму для зберігання контактів - ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

function getContact() {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
}

function saveContact(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function renderContact() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  const contacts = getContact();
  contacts.forEach((contact) => {
    const li = document.createElement('li');
    li.innerHTML = `${contact.firstName}, ${contact.lastName || ''}, ${contact.phone || ''}, ${contact.email || ''}`;
    contactList.appendChild(li); // Append the created 'li' to the contact list
  });
}

function saveContacts(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const contact = getContact();
  const newContact = { firstName, lastName, phone, email };

  contact.push(newContact); // Always add new contact for now
  saveContact(contact);
  renderContact(); // Re-render the contact list after saving
}

document.getElementById('contactForm').addEventListener('submit', saveContacts);

// Initial render to display contacts from storage on page load
renderContact();
