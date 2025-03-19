// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// const button = document.querySelector("button");
// const parent = document.querySelector('.parent');

// parent.addEventListener("click", () => {
//   alert("parent was clicked");
// });

// child.addEventListener("click", () => {
//   alert("child was clicked");

// });

// descendant.addEventListener("click", (e) => {
//   alert("descendant was clicked");
//   e.stopPropagation()
// });

// function example(e) {
//   console.log(`event detached:`, e.target);
//    console.log(`event detached:`, e.currentTarget);
//   // let text = e.target.nodeName;
//   // document.getElementById("demo").innerHTML = text;
// }
// document.addEventListener('click', example)

//додати обробники подій і показати результат

//example 3
// function example2(e) {
//   console.log('Button was clicked', e.target);
//   e.target.style.backgroundColor ='green';
//   e.target.style.padding = '20px'

// }
// parent.addEventListener('click', example2)

// task2






































//example1
// const btns = document.querySelectorAll('.btn');
// console.log(btns);

// btns.forEach((button) => {
//   button.addEventListener('click', function(event) {
//     console.log(event.currentTarget);
//     console.log(event.target);
//   })
// })

//task3
// const userList = document.getElementById('userList');
// const button = document.querySelectorAll('.deleteButton')

// function deleteUser(event) {
//   // console.log(event.target);
//   if(event.target.classList.contains('deleteButton')) {
//     console.log('button');
//     const child = event.target.closest('li');
//     console.log(child);
//     child.remove();
//   }
// }

// button.forEach((btn) => {
//   btn.addEventListener('click', deleteUser);

// })

//task4
// const buttonList = document.querySelectorAll(".btn");
// console.log(buttonList);

// const hightLightElement = (event) => {
//   console.log(event.target);

//    buttonList.forEach((btn) => {
//     btn.classList.remove('active')
//   })

//   event.target.classList.add('active')
// };

// buttonList.forEach((btn) => {
//   btn.addEventListener('click', hightLightElement);
// })

