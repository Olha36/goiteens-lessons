// // import countries from './countries';

// const getInput = document.querySelector('input');
// const getDataContainer = document.querySelector('.data-container');

// const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';

// async function fetchData() {
//   try {
//     const response = await fetch(countriesApi);
//     if (!response.ok) {
//       throw new Error(`Could not fetch data`);
//     }
//     return await response.json();
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// }

// async function showCountriesData(event) {
//   const searchQuery = event.target.value.trim().toLowerCase();
//   if (!searchQuery) {
//     getDataContainer.innerHTML = ''; // Clear container if input is empty
//     return;
//   }

//   const countries = await fetchData();
//   const matchingCountries = countries.filter((country) =>
//     country.name.official.toLowerCase().includes(searchQuery)
//   );

//   // Render data based on number of matching countries
//   if (matchingCountries.length === 1) {
//     renderCountryDetails(matchingCountries[0]);
//   } else if (matchingCountries.length > 1 && matchingCountries.length <= 10) {
//     renderCountryList(matchingCountries);
//   } else if (matchingCountries.length > 10) {
//     getDataContainer.innerHTML = '<p>Too many matches found. Please refine your search.</p>';
//   } else {
//     getDataContainer.innerHTML = '<p>No countries found.</p>';
//   }
// }

// function renderCountryDetails(country) {
//   const { name, flags, capital, population, languages } = country;
//   const officialName = name.official;
//   const countryFlags = flags.png;
//   const countryLanguages = Object.values(languages).join(', ');

//   getDataContainer.innerHTML = `
//     <div>
//       <img src="${countryFlags}" alt="${officialName}" width="50">
//       <h2>${officialName}</h2>
//       <p><strong>Capital:</strong> ${capital}</p>
//       <p><strong>Population:</strong> ${population}</p>
//       <p><strong>Languages:</strong> ${countryLanguages}</p>
//     </div>
//   `;
// }

// function renderCountryList(countries) {
//   getDataContainer.innerHTML = countries
//     .map(
//       (country) => `
//       <p>${country.name.official}</p>
//     `
//     )
//     .join('');
// }

// // Attach event listener to input
// getInput.addEventListener('input', showCountriesData);


const getInput = document.querySelector('input');  
const getDataContainer = document.querySelector('.data-container');  
  
const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';  

async function fetchData(search) {  
    // console.log('hi', countriesApi)   
    try {  
        const getData = await fetch(countriesApi)  
        console.log(getData)  
        if (!getData.ok) {  
            throw new Error(`could not fetch data ${search}`)  
        }  
        return getData.json()  
    } catch (err) {  
        console.log(err)  
        return []
    }  
}   
  
//script.js  
  
async function showCountriesData(e) {  
    const edit = e.target.value.trim().toLowerCase() 
    if (!edit) { 
        getDataContainer.innerHTML = "" 
        return; 
    } 
    const getFetchData = await fetchData()  
    const filterCountries = getFetchData.filter(country => country.name.official.toLowerCase().includes(edit))  
    if(filterCountries.length === 1){
        renderCountries(filterCountries[0])
    } else if(filterCountries.length > 1 && filterCountries.length <= 10) { 
        renderCountries(filterCountries)
    } else if(filterCountries.length > 10){
        getDataContainer.innerHTML = `  
        <p>Забагато співпадінь, змініть параметр пошуку.</p>`
    } else {
        getDataContainer.innerHTML = `  
        <p>Не знайдено</p>`
    }
}   

function renderCountries(country) {  
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
function renderCountriesList(countries){ 
    getDataContainer.innerHTML=countries.map((country)=>`<p>${country.name.official}</p>`).join('') 
}
getInput.addEventListener('input', showCountriesData);





// const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';

// export default async function fetchCountries() {
//     try {
//         const response = await fetch(countriesApi); // Send GET request
//         if (!response.ok) {
//             throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//         }

//         const data = await response.json(); // Parse JSON response
//         console.log('Fetched Countries:', data); // Log data to the console
//     } catch (error) {
//         console.error('Error:', error); // Log errors, if any
//     }
// }

// fetchCountries(); // Call the function
