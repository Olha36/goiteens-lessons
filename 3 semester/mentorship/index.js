//task 1
// const listItems = document.querySelectorAll('#categories .item');
// // console.log(`У списку ${listItems.length} категорії.`);
// listItems.forEach(category => {
//   const title = category.querySelector('h2').textContent;
//   console.log(`Категорія:`, title);

//   const itemAmount = category.querySelectorAll('ul li').length;
//   console.log(`Кількість елементів:`, itemAmount);
// })

//task 2
// const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];
// console.log(ingredients);

// const ingredientsItems =  ingredients.map((ingredient) => {
//   const listItem = document.createElement('li');
//  listItem.textContent = ingredient;
//  return listItem;
// })
// ingredientsList.append(...ingredientsItems);

// task 3
// const button = document.querySelector('#button');
// const input = document.querySelector('#text');

// button.addEventListener('click', function() {
//   const newText = input.value;
//   button.innerHTML = newText;
//   input.value = '';
// })

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQVToF0kswHJ_eljqp-L8XVJ1HsLfG9PxMzNnOWe3DQ&s

const img = document.querySelector('.img');
const title = document.querySelector('.title');
const button = document.querySelector('.button2');

button.addEventListener('click', function() {
img.src = 'data:image/jpeg;base64,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'
})

