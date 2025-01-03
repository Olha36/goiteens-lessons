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
showCountriesData()  

function renderCountries(country) {  
const { name, flags, capital, population, languages } = country;  
        const officialName = name.official  
        const countryFlags = flags.png  
        const countryLanguages = Object.values(languages).join(', ')  
        const alt = 'Прапор не знайдено'  
        getDataContainer.innerHTML = `  
        <p>${officialName}</p>  
        <p>${capital}</p>  
        <p>${population}</p>  
        <img alt='${alt}' src='${countryFlags}'>  
        <p>${countryLanguages}</p>  
    ` 
} 
function renderCountriesList(countries){ 
    getDataContainer.innerHTML=countries.map((country)=><p>${country.name.official}</p>).join('') 
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
