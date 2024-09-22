import { PropTypes } from 'prop-types';

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className='button-wrapper'>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
