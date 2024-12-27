// import countries from './countries';

const getInput = document.querySelector('input');
const getDataContainer = document.querySelector('.data-container');

const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';

async function fetchData() {
  try {
    const response = await fetch(countriesApi);
    if (!response.ok) {
      throw new Error(`Could not fetch data`);
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function showCountriesData(event) {
  const searchQuery = event.target.value.trim().toLowerCase();
  if (!searchQuery) {
    getDataContainer.innerHTML = ''; // Clear container if input is empty
    return;
  }

  const countries = await fetchData();
  const matchingCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchQuery)
  );

  // Render data based on number of matching countries
  if (matchingCountries.length === 1) {
    renderCountryDetails(matchingCountries[0]);
  } else if (matchingCountries.length > 1 && matchingCountries.length <= 10) {
    renderCountryList(matchingCountries);
  } else if (matchingCountries.length > 10) {
    getDataContainer.innerHTML = '<p>Too many matches found. Please refine your search.</p>';
  } else {
    getDataContainer.innerHTML = '<p>No countries found.</p>';
  }
}

function renderCountryDetails(country) {
  const { name, flags, capital, population, languages } = country;
  const officialName = name.official;
  const countryFlags = flags.png;
  const countryLanguages = Object.values(languages).join(', ');

  getDataContainer.innerHTML = `
    <div>
      <img src="${countryFlags}" alt="${officialName}" width="50">
      <h2>${officialName}</h2>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>Population:</strong> ${population}</p>
      <p><strong>Languages:</strong> ${countryLanguages}</p>
    </div>
  `;
}

function renderCountryList(countries) {
  getDataContainer.innerHTML = countries
    .map(
      (country) => `
      <p>${country.name.official}</p>
    `
    )
    .join('');
}

// Attach event listener to input
getInput.addEventListener('input', showCountriesData);
