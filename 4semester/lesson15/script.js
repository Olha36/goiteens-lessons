// example 1
// const button = document.querySelector('button');

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();

//   xhttp.onload = function() {
//     document.getElementById('test').innerHTML = this.responseText;
//   }
//   xhttp.open('GET', 'text.txt');
//   xhttp.send()
// }

// button.addEventListener('click', loadDoc)

// example 2
const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

// function updateDisplay(verse) {
//   verse = verse.replace(" ", "").toLowerCase();
//   const url = `task2-textFiles/${verse}.txt`;
//   // Call `fetch()`, passing in the URL.
//   fetch(url)
//   // fetch() returns a promise. When we have received a response from the server,
//   // the promise's `then()` handler is called with the response.
//   .then((response) => {
//     // Our handler throws an error if the request did not succeed.
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // Otherwise (if the response succeeded), our handler fetches the response
//     // as text by calling response.text(), and immediately returns the promise
//     // returned by `response.text()`.
//     return response.text();
//   })
//   // When response.text() has succeeded, the `then()` handler is called with
//   // the text, and we copy it into the `poemDisplay` box.
//   .then((text) => {
//     poemDisplay.textContent = text;
//   })
//   // Catch any errors that might happen, and display a message
//   // in the `poemDisplay` box.
//   .catch((error) => {
//     poemDisplay.textContent = `Could not fetch verse: ${error}`;
//   });

// }

// verseChoose.addEventListener("change", () => {
//   const verse = verseChoose.value;
//   updateDisplay(verse);
// });


// example 3

fetch("https://jsonplaceholder.typicode.com/users?${searchParams}")
 .then(response => {
   if (!response.ok) {
     throw new Error(response.status);
   }
   return response.json();
 })
 .then(data => {
  console.log(data)
   // Data handling
 })
 .catch(error => {
   // Error handling
   console.log(error)
 });

 const searchParams = new URLSearchParams({
  _limit: 7,
  _sort: "email"
 })
 console.log(searchParams.toString());
 const headers = {
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
 };
 