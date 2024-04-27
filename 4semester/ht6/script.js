function addTask() {
  var taskInput = document.getElementById("taskInput").value;
  if (taskInput === "") {
    alert("Please enter a task.");
    return;
  }
  
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task: taskInput, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  displayTasks();
  document.getElementById("taskInput").value = ""; // Clear input field after adding task
}

// Function to display tasks
function displayTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear existing list
  
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function(task, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<input type="checkbox" onchange="updateTask(${index}, this.checked)" ${task.completed ? 'checked' : ''}> ${task.task}`;
    taskList.appendChild(listItem);
  });
}

// Function to update task completion status
function updateTask(index, completed) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display tasks when page loads
displayTasks();