function createForm() {
  const form = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const messageLabel = document.createElement('label');
  const messageTextarea = document.createElement('textarea');
  const button = document.createElement('button');

  button.textContent = 'Submit';
  button.type = 'submit';

  nameLabel.textContent = 'Enter your name';
  nameLabel.setAttribute('for', 'name');

  nameInput.type = 'text';
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');

  emailLabel.textContent = 'Enter your email';
  emailLabel.setAttribute('for', 'email');
  emailInput.type = 'email';
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');

  messageLabel.textContent = 'Your message';
  messageLabel.setAttribute('for', 'message');
  messageTextarea.setAttribute('id', 'message');
  messageTextarea.setAttribute('name', 'message');

  form.classList.add('form');

  document.body.append(form);
  form.append(nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageTextarea, button);
}

createForm();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      });

      if (response.ok) {
        // Display success message or handle success feedback appropriately
        console.log('Feedback submitted successfully!');
        form.reset();
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  });
});
