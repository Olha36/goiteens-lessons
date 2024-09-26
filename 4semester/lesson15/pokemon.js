const form = document.getElementById('search-form');
const pokeId = document.getElementById('pokemon-id');
const button = document.getElementById('search-button');


async function getDateAPi(name) {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
  const responseApi = await fetch(pokeApi);
  if (!responseApi.ok) {
    throw new Error(`could not fetch DATA for ${name}:responseApi.statusText`);
  }
}
getDateAPi();
// обробник події на форму має містити функцію яка відповідаж за знаходження елементів:
// - знайти значення інпута та врахувати кейс. Всі літери автоматично трансформувати в малі
// якщо дані знайдені... виводимо картки або помилку
// фунеція для відображення даних в якій буде розмітка
// функція для виводу помилок

