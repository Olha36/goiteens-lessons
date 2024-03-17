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

const userAge = () =>  age;
const helloMessage = () => hello;

module.exports = {
  userAge,
  helloMessage
}