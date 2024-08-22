import './App.css';
import recipeData from '../src/public/recipies.json';
import { PropTypes } from 'prop-types';

const Recipe = ({ name, time, servings, calories, difficulty, image }) => {
  return (
    <div className='recipe-container'>
      <h2>{name}</h2>
      <p>{time}</p>
      <p>{servings}</p>
      <p>{calories}</p>
      <p>{difficulty}</p>
      <img src={image} alt='img' width={'70%'} />
    </div>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  servings: PropTypes.number,
  calories: PropTypes.number,
  difficulty: PropTypes.number,
  image: PropTypes.string,
};

function App() {
  return (
    <>
      {recipeData.map((recipe, index) => (
        <Recipe
          key={index}
          name={recipe.name}
          time={recipe.time}
          servings={recipe.servings}
          calories={recipe.calories}
          difficulty={recipe.difficulty}
          image={recipe.image}
        />
      ))};
    </>
  );
}

export default App;
