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

const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`

async function getWeatherApi(name) {
  
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch data for ${name}: ${response.statusText}`);
    }
    return response.json();
}

function showWeather() {
  const inputWeatherValue = cityInput.value;
  weatherResultContainer.textContent = inputWeatherValue;
}
getWeatherApi('London')

searchButton.addEventListener('click', showWeather)