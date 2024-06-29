import { fetchCountries } from '../scripts/fetchCountries.js';

const input = document.querySelector(".find-country");
const resultContainer = document.querySelector(".resultContainer");

async function getCountries() {
  const inputValue = input.value.toLowerCase().trim();

  const countriesData = await fetchCountries();

  if (countriesData) {
    const filteredCountry = countriesData.find(country =>
      country.name.common.toLowerCase().includes(inputValue) ||
      country.name.official.toLowerCase().includes(inputValue)
    );

    if (filteredCountry) {
      const { name, capital, population, languages, flags } = filteredCountry;
      const officialName = name.official;
      const languageList = Object.values(languages).join(', ');
      const flagImg = flags.png;

      resultContainer.innerHTML = `
        <h2>Country's name: ${officialName}</h2>
        <p>Capital city is: ${capital}</p>
        <p>Population is: ${population}</p>
        <ul>Languages are the following: 
          <li>${languageList}</li>
        </ul>
        <p>The flag is: <img src="${flagImg}" alt="Flag of ${officialName}"></p>
      `;
      resultContainer.style.display = 'block';
    } else {
      resultContainer.innerHTML = "<p>No country found with that name.</p>";
    }
  }
  input.value = '';
}

function createPixieDustEffect() {
  const numberOfParticles = 60;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const xOffset = Math.random() * input.offsetWidth - input.offsetWidth / 1;
    const yOffset = Math.random() * input.offsetHeight - input.offsetHeight / 1;
    
    particle.style.left = `${input.offsetLeft + input.offsetWidth / 1 + xOffset}px`;
    particle.style.top = `${input.offsetTop + input.offsetHeight / 1 + yOffset}px`;
    particle.style.animationDelay = `${Math.random() * 0.5}s`;

    document.body.appendChild(particle);

    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
}

function removePixieDustEffect() {
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    particle.remove();
  });
}

input.addEventListener('focus', () => {
  createPixieDustEffect(input);
});

input.addEventListener('blur', () => {
  removePixieDustEffect();
});

input.addEventListener("input", _.debounce(getCountries, 500));
