
let template; // Define the template variable globally

document.addEventListener('DOMContentLoaded', async function () {
  try {
    // Fetch and display initial data
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Network response was not ok!');
    }
    const data = await response.json();
    const source = document.querySelector('#menu-template').innerHTML;
    template = Handlebars.compile(source); // Compile the template globally
    document.querySelector('#menu-container').innerHTML = template(data);
  } catch (error) {
    console.log('Error fetching or processing data', error);
  }
  const menuItemLiElement = document.querySelectorAll('.menu-item')
  console.log(menuItemLiElement);

  menuItemLiElement.forEach(item => {
    item.addEventListener('click', getUpdateRequest)
  })
  // Handle form submission

  async function getPostRequest(e) {
    e.preventDefault();

    const title = document.getElementById('create-post').value;
    const content = document.getElementById('contentArea').value;
    const newPost = {
      id: (Math.random() * 10000).toFixed(0), // generate a random id
      title: title,
      views: 0, // initial views count
      content: content
    };

    console.log('Sending new post:', newPost);

    try {
      const postResponse = await fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      console.log('Server response:', postResponse);

      if (!postResponse.ok) {
        const errorText = await postResponse.text();
        console.error('Server error response:', errorText);
        throw new Error('Failed to add post to database');
      }

      alert('Post added successfully');

      // Fetch and display updated data
      const updatedResponse = await fetch('/db.json');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedResponse.json();
      document.querySelector('#menu-container').innerHTML = template(updatedData);

    } catch (error) {
      console.log('Error adding post to database', error);
    }

  }
  async function getUpdateRequest(e) {
    console.log('update');
    e.preventDefault();

    try {
      const id = e.target.dataset.id; // Get the id of the selected post from the dataset
      const title = prompt('Enter the new title'); // Prompt the user to enter the new title
      const content = prompt('Enter the new content'); // Prompt the user to enter the new content

      const updatedPost = {
        id: id,
        title: title,
        content: content
      };

      const updateResponse = await fetch(`/posts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
      });

      console.log('Server response:', updateResponse);

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        console.error('Server error response:', errorText);
        throw new Error('Failed to update post in database');
      }

      alert('Post updated successfully');

      // Fetch and display updated data
      const updatedResponse = await fetch('/db.json');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedResponse.json();
      document.querySelector('#menu-container').innerHTML = template(updatedData);
    } catch (error) {
      console.log('Error updating post in database', error);
    }
  }

  document.getElementById('posts').addEventListener('submit', getPostRequest);

  
  
})
