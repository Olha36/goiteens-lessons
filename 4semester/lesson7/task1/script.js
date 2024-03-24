const userData = {
  name: "John Smith",
  email: "john@example.com"
};


const userTemplate = Handlebars.compile(document.querySelector('#user-template').innerHTML);
document.querySelector('body').innerHTML = userTemplate(userData);