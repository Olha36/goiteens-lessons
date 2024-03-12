// const taskList = document.querySelector('#taskList');
// const taskInput = document.querySelector('#taskInput');
// const addTaskBtn = document.querySelector('#addTaskBtn');
// const div = document.querySelector('div');

// let nanoid = require('nanoid/non-secure');

// model.id = nanoid();
// console.log(model.id)


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

document.querySelector('button.image').onclick = () => {

	basicLightbox.create(`
		<img width="400" height="3  00" src="https://placehold.it/1400x900">
	`).show()

}
