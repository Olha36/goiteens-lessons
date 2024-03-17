// const taskList = document.querySelector('#taskList');
// const taskInput = document.querySelector('#taskInput');
// const addTaskBtn = document.querySelector('#addTaskBtn');
// const div = document.querySelector('div');


// const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Black', 'Pink', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox';

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="400" height="3  00" src="https://placehold.it/1400x900">
// 	`).show()

// }

const taskInput = document.querySelector('#taskInput');
console.log(taskInput);
const taskList = document.querySelector('#taskList');
console.log(taskList);
const addTaskBtn = document.querySelector('#addTaskBtn');
console.log(addTaskBtn);
const div = document.querySelector('div');
console.log(div);

let isFunctionExecuted = false;

addTaskBtn.addEventListener('click', () => {
	console.log('hi');
	addTask();

	if(!isFunctionExecuted) {
		deleteTask();
		markTaskDone();

		isFunctionExecuted = true;
	}

	taskInput.value ="";
	
})

const addTask = () => {
	const listElement = document.createElement('li');
	const checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	const newContent = document.createTextNode(taskInput.value);
  
	listElement.appendChild(newContent);
	listElement.appendChild(checkBox)

	taskList.appendChild(listElement);

}

const deleteTask = () => {
	const deleteButton = document.createElement('button');
	const buttonContent = document.createTextNode('delete');

	deleteButton.appendChild(buttonContent);

	div.insertAdjacentElement("beforeend", deleteButton);

	deleteButton.addEventListener('click', () => {
		const checkedItems = document.querySelectorAll('li.checked');
		console.log(checkedItems);
		checkedItems.forEach(item => item.remove());
	})
}

const markTaskDone = () => {
const  doneTaskButton= document.createElement('button');
const buttonDoneContent = document.createTextNode('done');

	doneTaskButton.appendChild(buttonDoneContent);

	div.insertAdjacentElement("beforeend", doneTaskButton);
}
// console.log(crypto.randomUUID());