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
// }

//task 1
// let counter = 10;
// const interval = setInterval(() => {
//   counter--;
//   console.log(counter);
//   if(counter === 0) {
//     clearInterval(interval);
//     console.log("Час вийшов!");
//   }
// }, 1000)


//task 2
// const start = document.querySelector(".button-start");
// const stop = document.querySelector(".button-stop");
// const reset = document.querySelector(".button-reset");

// let startTime;
// let timerInterval;
// let running = false;
// let pausedTime = 0;

// function interval() {
//   timerInterval = setInterval(() => {
//     const currentTime = new Date();
//     const elapsedTime = currentTime - startTime + pausedTime;
//     const hours = Math.floor(elapsedTime / 3600000);
//     const minutes = Math.floor((elapsedTime % 3600000) / 60000);
//     const seconds = Math.floor((elapsedTime % 60000) / 1000);
//     const milliseconds = elapsedTime % 1000;
    
//     console.log(`${hours}:${minutes}:${seconds}.${milliseconds}`);
//   }, 1000);
// }


// function startTimer() {
//   if(!running) {
//     startTime = new Date()
//     interval();
//     running = true;  
//   }
// }
// function stopTimer() {
//   if (running) {
//     clearInterval(timerInterval);
//     pausedTime += new Date() - startTime;
//     running = false;
//   }
// }
// function resetTimer() {
//   clearInterval(timerInterval);
//   running = false;
//   pausedTime = 0;
// }

// start.addEventListener("click", startTimer);
// stop.addEventListener("click", stopTimer);
// reset.addEventListener("click", resetTimer);


//task 3
// let num = 11;

// const interval = setInterval(() => {
//   num--;
//   if (num === 5) {
//     document.body.style.backgroundColor = 'red';
//   }else if (num === 0) {
//     clearInterval(interval)
//   }
//   console.log(num);
// }, 1000)


//task 4
// timerInterval = setInterval(() => {
//   const currentTime = new Date();
//   const hours =
//     currentTime.getHours() +
//     ":" +
//     currentTime.getMinutes() +
//     ":" +
//     currentTime.getSeconds() ;
//   console.log(hours);
// }, 1000);


//task 5
// const square = document.querySelector('.animation-block');

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log(counter);
//   if (counter >= 5) {
//     square.style.width = '200px';
//     square.style.height = '200px';
//   } else if (counter === 10) {
//     square.style.width = '400px';
//     square.style.height = '500px';
//     clearInterval(interval)
//   }
// }, 1000)