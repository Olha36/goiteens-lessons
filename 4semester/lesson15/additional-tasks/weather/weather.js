`API`
'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'

// to do:
// 1. Знайти всі елементи на сторінці
// 2. прописати функцію, яка буде знаходити дані погоди:
//  - використати фетч апі та за допомогою методу зен та кетч повернути погоду або помилку
//  - повернути статус відповіді
//  - вивести результати в консоль
// 3. оголосити функцію, яка буде виводити результати погоди на сторінку. 

//  - вивести результат погоди на сторінку
// 4. додати обробник події при кліку на кнопку пошуку

const cityInput = document.getElementById('city-name');
const searchButton = document.querySelector('.search-button');
const weatherResultContainer = document.getElementById('weather-container');

const apiKey = 'e5fba43dd1c0b016e669357a4e827091'; // Replace with your actual API key

async function getWeatherApi(name) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch data for ${name}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error: ', error);
    return null;
  }
}

async function showWeather(event) {
  event.preventDefault();
  let inputWeatherValue = cityInput.value;

  const weatherData = await getWeatherApi(inputWeatherValue);

  if (weatherData) {
    const { main, wind, weather } = weatherData;
    const weatherDescription = weather[0].description;
    const weatherTemp = main.temp;
    const windSpeed = wind.speed;

    weatherResultContainer.innerHTML = `
      <h2>Weather in ${inputWeatherValue}</h2>
      <p>Weather description: ${weatherDescription}</p>
      <p>The temperature is ${weatherTemp}</p>
      <p>The wind speed is ${windSpeed}</p>
    `;

    
  } else {
    weatherResultContainer.innerHTML = `<p>Could not retrieve weather data for ${inputWeatherValue}</p>`;
  }
  cityInput.value = '';
}

searchButton.addEventListener('click', showWeather);
