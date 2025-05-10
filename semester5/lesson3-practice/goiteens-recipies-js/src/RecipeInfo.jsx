import PropTypes from 'prop-types';

export default function RecipeInfo({ icon, text }) {
  return (
    <p>
      {icon} {text}
    </p>
  );
}

RecipeInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};
