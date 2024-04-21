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

// let startTime;
// let timerInterval;


// function interval () {
//   timerInterval = setInterval(() => {
//     const currentTime = new Date();
//     const elapsedTime = currentTime - startTime;
//     const hours = Math.floor(elapsedTime / 3600000)
//     // const hours = currentTime.getHours();
//     // const minutes = currentTime.getMinutes();
//     // const seconds = currentTime.getSeconds();
//     // const miliSeconds = currentTime.getMilliseconds();
//     // console.log(`${hours}:${minutes}:${seconds}.${miliSeconds}`);
//     console.log(hours);
//   }, 1000)
// }
// interval()


// const handleStart =() => {
// interval();
// }

// const handleStop = () => {
//   clearInterval(timerInterval)
// }

// const handleReset = () => {
//   clearInterval(timerInterval)
// }

// start.addEventListener('click', handleStart);
// stop.addEventListener('click', handleStop);
// reset.addEventListener('click', handleReset);


let timeLeft = 30000;
const timerDisplay = document.querySelector('.displayTimer');
const startButton = document.querySelector('.startTimer');

const startTimer = () => {
	timeLeft = 30000;
	startButton.disabled = true;
	let timer = setInterval(() => {
		timeLeft -= 10;
		timerDisplay.textContent = timeLeft / 1000;

		if (timeLeft <= 10000) {
			timerDisplay.style.color = 'red';
		} else {
			timerDisplay.style.color = 'black';
		}
		if (timeLeft === 0) {
			clearInterval(timer);
			startButton.disabled = false;
			timerDisplay.textContent = 'Час закінчився!';
		}
	}, 10);
};