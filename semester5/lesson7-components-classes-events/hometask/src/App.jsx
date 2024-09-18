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

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      this.setState({ tasks: savedTasks });
    }
  }

  // function to get input value
  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
    console.log(e.target.value);
  };

  // function to add a task

  addTask = () => {
    // створити змінні для зберігання тексту нового завдання та масиву списку всіх завдань
    const { tasks, newTask } = this.state;
    // Перед тим, як додавати завдання, треба впевнитись, що воно не порожнє.
    if (newTask) {
      const updatedTasks = [...tasks, newTask];
      this.setState({
        tasks: updatedTasks,
        newTask: '',
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

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
        <button className='add-task' onClick={this.addTask}>
          Додати
        </button>
        <ul className='tasks'>
          {this.state.tasks.map((text, id) => (
            <li key={id}>
              {text}
              <button className='delete-task'>Видалити</button>
              <button className='edit-task'>Редагувати</button>
            </li>
          ))}
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
