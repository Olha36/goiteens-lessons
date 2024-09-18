import './pokemon.js';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const pokemonUrl ='https://api.harvardartmuseums.org'
fetch(pokemonUrl)
.then((response) => response.json())
.then(json => console.log(json))