const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};


const source = document.querySelector('#menu-template').innerHTML;
const template = Handlebars.compile(source);

document.querySelector('#menu-container').innerHTML = template(menuData)