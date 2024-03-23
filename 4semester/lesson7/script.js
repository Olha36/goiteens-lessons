// const menuData = {
//   title: 'Eat it createElement, templates rule!',
//   items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
// };
// const source = document.querySelector('#menu-template').innerHTML;
// const template = Handlebars.compile(source);
// const markup = template(menuData);

// console.log(markup); // магия 
// const container = document.querySelector('#menu-container');
// container.innerHTML = markup;

const userData = {
  name: "John Smith",
  email: "john@example.com"
};


const templateData = document.querySelector('#user-template').innerHTML;
const data = Handlebars.compile(templateData);
const markup = data(userData)
const userContainer = document.querySelector('.wrapper');
userContainer.innerHTML = markup;