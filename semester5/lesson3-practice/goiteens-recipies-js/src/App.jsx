import './App.css';
import recipeData from '../src/public/recipies.json';
import { PropTypes } from 'prop-types';
import { MdOutlineFoodBank } from 'react-icons/md';

const Recipe = ({ name, time, servings, calories, difficulty, image, Icon }) => {
  return (
    <div className='recipe-container'>
      {Icon && <Icon />}
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
  Icon: PropTypes.elementType,
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
          Icon={MdOutlineFoodBank}
        />
      ))}
      ;
    </>
  );
}

export default App;
