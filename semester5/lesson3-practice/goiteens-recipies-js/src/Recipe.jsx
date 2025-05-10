import PropTypes from 'prop-types';
import RecipeInfo from './RecipeInfo';

export default function Recipe({ recipe, icons }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300" />
      <RecipeInfo icon={icons.time} text={`${time} min`} />
      <RecipeInfo icon={icons.servings} text={`${servings} servings`} />
      <RecipeInfo icon={icons.calories} text={`${calories} kcal`} />
      <RecipeInfo icon={icons.difficultxy} text={`Difficulty: ${difficulty}`} />
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icons: PropTypes.shape({
    time: PropTypes.element.isRequired,
    servings: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
    difficultxy: PropTypes.element.isRequired,
  }).isRequired,
};
