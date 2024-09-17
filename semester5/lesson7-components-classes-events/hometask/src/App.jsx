import { Component } from 'react';
import '../src/App.css';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // function to get input value
  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
    console.log((e.target.value));
    
  };

  // function to dd a task

  addTask = () => {
    const {task, newTask} = this.setState;
    
    
  }

  render() {
    return (
      <div className='tasks-container'>
        <input
          type='text'
          value={this.state.newTask}
          className='task-input'
          placeholder='Додайте нове завдання'
          onChange={this.handleInputChange}
        />
        <button className='add-task' onClick={this.addTask}>Додати</button>
        <ul className='tasks'>
          <li></li>
          <button className='delete-task'>Видалити</button>
          <button className='edit-task'>Редагувати</button>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <div className='task-list'>
        <h1>To do list</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
