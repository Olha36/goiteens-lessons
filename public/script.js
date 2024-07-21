console.log('check');
document.addEventListener('DOMContentLoaded', function () {
  fetch('/db.json')
    .then((response) => response.json())
    .then((data) => {
      const source = document.querySelector('#menu-template').innerHTML;
      const template = Handlebars.compile(source);

      document.querySelector('#menu-container').innerHTML = template(data);
    })
    .catch((error) => console.log(error));
});
