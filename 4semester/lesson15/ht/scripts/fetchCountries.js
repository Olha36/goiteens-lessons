// const input = document.querySelector("input");
// const resultContainer = document.querySelector(".resultContainer");
const apiUrl = `https://restcountries.com/v3.1/all?fields=name,capital,flags,languages,population`;

export async function fetchCountries(searchQuery) {
  try {
    const getApi = await fetch(apiUrl);
    if (!getApi.ok) {
      throw new Error(
        `Could not fetch data for ${searchQuery}: ${response.statusText}`
      );
    }
    return getApi.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}

// async function getCountries() {
//   const inputValue = input.value.toLowerCase().trim();
//   console.log(inputValue);

//   const countriesData = await fetchCountries();

//   if (countriesData) {
//     const filteredCountry = countriesData.find(country =>
//       country.name.common.toLowerCase().includes(inputValue) ||
//       country.name.official.toLowerCase().includes(inputValue)
//     );
  

//   if (filteredCountry) {
//     const { name, capital, population, languages, flags } = filteredCountry;
//     const officialName = name.official;
//     const languageList=  Object.values(languages).join(', ')
//     const flagImg = flags.png;

//     resultContainer.innerHTML = `
//     <h2>Country's name: ${officialName}</h2>
//     <p>Capital city is: ${capital}</p>
//     <p>Population is: ${population}</p>
//     <ul>Languages are the following: 
//       <li>${languageList}</li>
//     </ul>
//     <p>The flag is: <img src="${flagImg}" alt="Flag of ${officialName}"></p>
//     `;
//   } else {
//     resultContainer.innerHTML = "<p>No country found with that name.</p>";
//   }
// }
// }


// input.addEventListener("input", _.debounce(getCountries, 500));
