const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';

export default async function fetchCountries() {
    try {
        const response = await fetch(countriesApi); // Send GET request
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log('Fetched Countries:', data); // Log data to the console
    } catch (error) {
        console.error('Error:', error); // Log errors, if any
    }
}

fetchCountries(); // Call the function
