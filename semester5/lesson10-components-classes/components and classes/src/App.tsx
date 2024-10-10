import { Component } from 'react';

class MyClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>Class Component</div>;
  }
}

interface CounterProps {
  step: number;
}

interface CounterState {
  count: number
}

class Counter extends Component<CounterProps, CounterState> {
  static defaultProps = {
    step: 1,
  };

  state = {
    count: 0
  }

  handleIncreaseClick = () => {
    this.setState((prevState) => ({
      count: prevState.count +this.props.step,
    }));
  };

 
  render() {
    const { step } = this.props;
    const { count } = this.state;
    return (
      <>
        <p>Counter is: {count}</p>;
        <button onClick={this.handleIncreaseClick}>Increase counter by {step}</button>
        <button>Decrease counter by {step}</button>
      </>
    );
  }
}

function App() {
  return (
    <>
      <MyClassComponent />
      <Counter step={5} />
    </>
  );
}

export default App;
