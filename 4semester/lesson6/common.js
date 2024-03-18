// const wrapper = document.querySelector('.wrapper')

// const welcomeUser = () => {
//   const newHeading = document.createElement('h1');
//   const newText = document.createTextNode('Welcome to our 6th topic!!!');

//   newHeading.appendChild(newText);
//   wrapper.appendChild(newHeading);
// }

// welcomeUser();


const hello = 'hello, world!'
const age = 25;
const victory = 'Ukraine will win!'

const userAge = () =>  age;
const helloMessage = () => hello;
// const ukrainianVictory = () => victory;

const ukrainianVictory = () => {
  return victory;
}

module.exports = {
  userAge,
  helloMessage,
  ukrainianVictory
}