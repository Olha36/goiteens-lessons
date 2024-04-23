// let num = 0;
// function handleClick() {
//  const interval = setInterval(() => {
//     num++;
//     console.log(num);
//     document.write(num + '<br>')

//     if(num >= 10) {
//       clearInterval(interval);
//     }
//   }, 1000)
//  }
//  handleClick()

//task 1
// const start = document.querySelector('.button-start');
// const stop = document.querySelector('.button-stop');
// const reset = document.querySelector('.button-reset');
// const text = document.querySelector('.seconds');


// let startTime;
// let timerInterval;
// let running = false;
// let pausedTime = 0;


// function interval () {
//   timerInterval = setInterval(() => {
//     const currentTime = new Date();
//     const elapsedTime = currentTime - startTime + pausedTime;
//     const hours = Math.floor(elapsedTime / 3600000);
//     const minutes = Math.floor((elapsedTime % 3600000)/ 60000);
//     const seconds = Math.floor((elapsedTime % 60000)/ 1000);
// 		const miliSeconds = elapsedTime % 1000;
// 	}, 1000)
// }

// const handleStart =() => {
// 	if(!running) {
// 		startTime  = new Date();
// 		interval();
// 		running = true;
// 	}
	
// }

// const handleStop = () => {
// 	if(running) {
// 		clearInterval(timerInterval);
// 		pausedTime += new Date() - startTime;
// 		running = false;
// 	}
// }

// const handleReset = () => {
//   clearInterval(timerInterval);
// 	running = false;
// 	pausedTime = 0;
// }

// start.addEventListener('click', handleStart);
// stop.addEventListener('click', handleStop);
// reset.addEventListener('click', handleReset);


//task 3
// const background = document.querySelector('body');

// let timer = 11;

// const interval = setInterval(() => {
// 	timer--;

// 	if(timer === 5) {
// 		background.style.backgroundColor = 'red';
// 	} 

// 	if(timer === 0) {
// 		clearInterval(interval)
// 	}
// 	console.log(timer);
// }, 1000)


//task 4
function clock() {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	return `${hours}:${minutes}:${seconds}`
}

setInterval(() => {
	console.log(clock());
}, 1000)
