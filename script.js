console.log('check');
document.addEventListener('DOMContentLoaded', function () {
  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
      const source = document.querySelector('#menu-template').innerHTML; // Ensure the template is correctly selected
      const template = Handlebars.compile(source); // Compile the template

      // Render the template with the `employees` data and insert it into the container
      document.querySelector('#menu-container').innerHTML = template(data);
    })
    .catch((error) => console.log(error));
});
