const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const div = document.querySelector('div');

let isFunctionExecuted = false;


addTaskBtn.addEventListener('click', function() {
  console.log(taskInput.value);

  addTask();

  if(!isFunctionExecuted) {
    deleteTask();
    markTaskDone();
    isFunctionExecuted = true;
  }
  
  taskInput.value = '';
})

const addTask = () => {
  const newElement = document.createElement('li');

  const newCheckBox = document.createElement('input');
  newCheckBox.type = 'checkbox';

  const newContent = document.createTextNode(taskInput.value);

  newElement.appendChild(newContent);
  newElement.appendChild(newCheckBox);


  taskList.insertAdjacentElement("afterbegin", newElement);

  newCheckBox.addEventListener('change', function() {
    if (this.checked) {
      newElement.classList.add('checked');
    } else {
      newElement.classList.remove('checked');
    }
  });
};

const deleteTask = () => {
  const deleteTaskButton = document.createElement('button');
  const buttonContent = document.createTextNode("delete the task");

  deleteTaskButton.appendChild(buttonContent);

  div.insertAdjacentElement("beforeend", deleteTaskButton)

  deleteTaskButton.addEventListener('click', function() {
    let checkedItems = document.querySelectorAll('li.checked');
    checkedItems.forEach(item => item.remove());
  });
};

const markTaskDone = () => {
  const doneTaskButton = document.createElement('button');
  const buttonDoneContent = document.createTextNode("the task is done");

  doneTaskButton.appendChild(buttonDoneContent);

  div.insertAdjacentElement("beforeend", doneTaskButton);

  doneTaskButton.addEventListener('click', function() {
    let checkedItems = document.querySelectorAll('li.checked');
    checkedItems.forEach(item => item.style.textDecoration = 'line-through');
  })
}


