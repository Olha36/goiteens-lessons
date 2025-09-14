const taskInput = document.querySelector("#taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("allTasks");

let tasks = [];

// функція для зберігання даних в локальне сховище
function localStorageData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// функція для отримання даних з локального сховища

function getData() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
  }
}

// функція рендеру списку

function allTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    let newLi = document.createElement("li");
    newLi.textContent = task;
    taskList.appendChild(newLi);
  });
}
// додавання нового завдання
addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  console.log(task);

  if (task === "") {
    alert("input should not be empty");
  } else {
    tasks.push(task);

    localStorageData();

    allTasks();
    taskInput.value = "";
  }
});

getData();
allTasks();


// fetch("./example.json")
//   .then((response) => response.json())
//   .then((dog) => {
//     const jsonDog = JSON.stringify(dog);
//     const parsedDog = JSON.parse(jsonDog);
//     console.log(parsedDog);
//   })
//   .catch((err) => console.error("Error loading JSON:", err));

// //   stringify - перетворює джаваскрипт формат в джейсон формат

// const data = { name: "goIteens", age: 10 };

// const stringified = JSON.stringify(data);
// console.log("stringify метод", stringified);

// const parsed = JSON.parse(stringified);
// console.log("parse метод", parsed);

// //   parse - перетворює джейсон формат в джаваскрипт формат
// // example 2
// const user = { name: "Olha", age: 15 };

// localStorage.setItem("user", JSON.stringify(user));

// const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log(savedUser.name);
