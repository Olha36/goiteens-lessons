import PropTypes from "prop-types";

export default function Greeting(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.isVisible && <p>Привіт, React-юзер!</p>}
    </div>
  );
}

// Описуємо типи props
Greeting.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};
