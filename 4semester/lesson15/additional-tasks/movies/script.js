const button = document.querySelector('button');
const inputValue = document.getElementById('query');
const resultContainer = document.querySelector('.result-container');
const errorContainer = document.querySelector('.error');

async function getResponse(movieName) {
  try {
    const searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4521bf4c5fe855be15cd691391edfa02&query=${movieName}`);
    const searchData = await searchResponse.json();
    if (searchData.results && searchData.results.length > 0) {
      const movieId = searchData.results[0].id;
      const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4521bf4c5fe855be15cd691391edfa02`);
      const movieData = await movieResponse.json();
      return movieData;
    } else {
      throw new Error('Movie not found');
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function addHtmlLayout(e) {
  e.preventDefault();
  const getInputValue = inputValue.value.trim();
  console.log(getInputValue);

  if (!getInputValue) {
    errorContainer.innerHTML = `<p>Please enter a movie name</p>`;
    return;
  }

  const movieData = await getResponse(getInputValue);

  if (movieData) {
    const { genres, homepage: movieLink, original_title: movieTitle } = movieData;
    const movieGenre = genres.map(genre => genre.name).join(', ');
    
    resultContainer.innerHTML = `
      <h2>Movie title is ${movieTitle}</h2>
      <p>Movie genre is: ${movieGenre}</p>
      <p>Website is: <a href="${movieLink}" target="_blank">${movieLink}</a></p>
    `;
  } else {
    errorContainer.innerHTML = `<p>Could not retrieve movie data for ${getInputValue}</p>`;
  }
  inputValue.value = '';
}

button.addEventListener('click', addHtmlLayout);
