import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the count state
    this.state = {
      count: 0,
    };
  }

  static propTypes = {
    step: PropTypes.number,
  };

  // Handle the increment logic
  handleIncrement = () => {
    // Increment the count by the step value from props
    this.setState((prevState) => ({
      count: prevState.count + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((nextState) => ({
      count: nextState.count - this.props.step,
    }))
  }
  render() {
    const { step } = this.props;
    const { count } = this.state; // Destructure count from state

    return (
      <div>
        {/* Display the count */}
        <span className="count">{count}</span>
        {/* Add onClick handler to the button */}
        <button type="button" className="increment-button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" className="decrement-button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Counter step={5} />
    </>
  );
}

export default App;
