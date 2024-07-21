document.addEventListener('DOMContentLoaded', async function () {
 try{
  const response = await fetch('/db.json');
  if(!response.ok) {
    throw new Error('Network response was not ok!')
  }
  const data = await response.json();
  const source = document.querySelector('#menu-template').innerHTML;
  const template = Handlebars.compile(source);
  document.querySelector('#menu-container').innerHTML = template(data);

 }  catch(error)  {
  console.log('Error fetching or processing data', error)
 } 
});

console.log('hi');