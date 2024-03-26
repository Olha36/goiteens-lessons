const menuData = {
  title: 'Eat it createElement, templates rule!',
  items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const employees  = {
  name: 'person1',
  age: 35,
  position: 'teacher'
}


const source = document.querySelector('#menu-template').innerHTML; //в меню темплейт буде додано
const template = Handlebars.compile(source); // скомпілювали і додали

document.querySelector('#menu-container').innerHTML = template(employees)