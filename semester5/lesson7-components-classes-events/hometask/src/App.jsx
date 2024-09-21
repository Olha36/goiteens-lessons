import React from 'react';
import '../src/App.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      editingIndex: null,
      editingTask: '',
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

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task, i) => i !== index);
    this.setState({ tasks: updatedTasks });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };


  startEditingTask = (index) => {
    this.setState({
      editingIndex: index,
      editingTask: this.state.tasks[index] || '',
    });
  };
  
  handleEditingInputChange = (event) => {
    this.setState({ editingTask: event.target.value });
  };

  saveTask = () => {
    const { tasks, editingTask, editingIndex } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editingTask;

    this.setState({
      tasks: updatedTasks,
      editingIndex: null,
      editingTask: '',
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
          {this.state.tasks.map((text, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <input
                  type='text'
                  value={this.state.editingTask || ''}
                  onChange={this.handleEditingInputChange}
                />
              ) : (
                text
              )}
              <button className='delete-task' onClick={() => this.deleteTask(index)}>
                Видалити
              </button>
              {this.state.editingIndex === index ? (
                <button className='save-task' onClick={this.saveTask}>
                  Зберегти
                </button>
              ) : (
                <button className='edit-task' onClick={() => this.startEditingTask(index)}>
                  Редагувати
                </button>
              )}
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
