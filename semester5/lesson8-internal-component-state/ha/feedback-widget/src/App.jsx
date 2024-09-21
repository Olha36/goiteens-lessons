import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  });

  const handleGoodFeedback = () => {
    setState((prevState) => ({ ...prevState, good: prevState.good + 1 }));
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const handleNeutralFeedback = () => {
    setState((prevState) => ({ ...prevState, neutral: prevState.neutral + 1 }));
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const handleNegativeFeedback = () => {
    setState((prevState) => ({ ...prevState, bad: prevState.bad + 1 }));
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    setState((prevState) => ({
      ...prevState,
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    setState((prevState) => {
      const total = prevState.good + prevState.neutral + prevState.bad;
      const percentage = total > 0 ? (prevState.good / total) * 100 : 0;
      return {
        ...prevState,
        percentage: percentage.toFixed(2)
      };
    });
  };

  return (
    <div className='feedback-container'>
      <h1>Please leave feedback</h1>

      <div className='button-wrapper'>
        <button className='feedback-positive' onClick={handleGoodFeedback}>
          Good
        </button>
        <button className='feedback-neutral' onClick={handleNeutralFeedback}>
          Neutral
        </button>
        <button className='feedback-negative' onClick={handleNegativeFeedback}>
          Bad
        </button>
      </div>

      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {state.total}</p>
      <p>Positive feedback: {state.percentage}%</p>
    </div>
  );
}

export default App;
