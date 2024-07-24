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

    // Add event listeners to dynamically created <li> elements
    addClickListeners();

  } catch (error) {
    console.log('Error fetching or processing data', error);
  }
  
  // Handle form submission for new post
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
      fetchAndDisplayPosts();
    } catch (error) {
      console.log('Error adding post to database', error);
    }
  }

  // Handle form submission for updating post
  async function updatePostRequest(e) {
    e.preventDefault();

    const postId = document.getElementById('post-id').value;
    const title = document.getElementById('update-title').value;
    const content = document.getElementById('update-content').value;

    const updatedPost = {
      id: postId,
      title: title,
      content: content
    };

    console.log('Sending updated post:', updatedPost);

    try {
      const updateResponse = await fetch(`/posts/${postId}`, {
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
      fetchAndDisplayPosts();
    } catch (error) {
      console.log('Error updating post in database', error);
    }
  }

  document.getElementById('posts').addEventListener('submit', getPostRequest);
  document.getElementById('update-post').addEventListener('submit', updatePostRequest);
  
  // Fetch and display posts
  async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('/db.json');
      if (!response.ok) {
        throw new Error('Network response was not ok!');
      }
      const data = await response.json();
      document.querySelector('#menu-container').innerHTML = template(data);

      // Add event listeners to dynamically created <li> elements
      addClickListeners();
    } catch (error) {
      console.log('Error fetching or processing data', error);
    }
  }

  // Function to add click listeners to <li> elements
  function addClickListeners() {
    const listItems = document.querySelectorAll('.menu-item');
    listItems.forEach(item => {
      item.addEventListener('click', function () {
        const postId = this.textContent.split(',')[0].trim(); // Extract post ID from text content
        document.getElementById('post-id').value = postId;

        // Optionally fetch post details here to pre-fill update form
        console.log(`Clicked on post ID: ${postId}`);
      });
    });
  }
});
