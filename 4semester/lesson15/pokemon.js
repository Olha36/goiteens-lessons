const form = document.getElementById('search-form');
const pokemonContainer = document.getElementById('pokemon-container');
const pokemonInput = document.getElementById('pokemon-id');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pokemonName = pokemonInput.value.trim().toLowerCase();
    if (pokemonName) {
        try {
            const pokemonData = await fetchPokemonData(pokemonName);
            displayPokemonData(pokemonData);
            pokemonInput.value = '';
        } catch (error) {
            displayError(error.message);
        }
    }
});

async function fetchPokemonData(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch data for ${name}: ${response.statusText}`);
    }
    return response.json();
}

function displayPokemonData(pokemon) {
    const html = `
        <div class="pokemon-card">
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Height: ${pokemon.height}</p>
            <p>Weight: ${pokemon.weight}</p>
            <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </div>
    `;
    pokemonContainer.innerHTML = html;
}

function displayError(error) {
    pokemonContainer.innerHTML = `<p class="error">${error}</p>`;
}

