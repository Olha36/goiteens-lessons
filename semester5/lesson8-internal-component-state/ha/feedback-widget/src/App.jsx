import './App.css';
import { useState } from 'react';
import Statistics from './components/statistics';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  });

  const handleFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
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
        percentage: Number(percentage.toFixed(2)),
      };
    });
  };

  return (
    <div className='feedback-container'>
      <Section title='Please leave feedback' />

      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      ></FeedbackOptions>
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={state.total}
        positivePercentage={state.percentage}
      />
    </div>
  );
}

export default App;
