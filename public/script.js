document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Network response was not ok!');
    }
    const data = await response.json();
    const source = document.querySelector('#menu-template').innerHTML;
    const template = Handlebars.compile(source);
    document.querySelector('#menu-container').innerHTML = template(data);
  } catch (error) {
    console.log('Error fetching or processing data', error);
  }

});

document.getElementById('posts').addEventListener('submit', async function (e) {
  e.preventDefault();

  const title = document.getElementById('create-post').value;
  const content = document.getElementById('contentArea').value;
  const newPost = {
    id: (Math.random() * 10000).toFixed(0), // generate a random id
    title: title,
    views: 0, // initial views count
    content: content
  };

  try {
    const postResponse = await fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    if (!postResponse.ok) {
      throw new Error('Failed to add post to database');
    }
    console.log('Post added successfully');
    // Optionally, refresh the posts list or provide feedback to the user
  } catch (error) {
    console.log('Error adding post to database', error);
  }
});
console.log('hi');