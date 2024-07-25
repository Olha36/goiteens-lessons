let template;

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Network response was not ok!');
    }
    const data = await response.json();
    const source = document.querySelector('#menu-template').innerHTML;
    template = Handlebars.compile(source);
    document.querySelector('#menu-container').innerHTML = template(data);
  } catch (error) {
    console.log('Error fetching or processing data', error);
  }

  const menuItemLiElement = document.querySelectorAll('.menu-item');
  menuItemLiElement.forEach(item => {
    item.addEventListener('click', getUpdateRequest);
  });

  async function getPostRequest(e) {
    e.preventDefault();

    const title = document.getElementById('create-post').value;
    const content = document.getElementById('contentArea').value;
    const newPost = {
      id: (Math.random() * 10000).toFixed(0),
      title: title,
      views: 0,
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
        const errorText = await postResponse.text();
        throw new Error('Failed to add post to database');
      }

      alert('Post added successfully');
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
    e.preventDefault();
    try {
      const response = await fetch('/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data from db.json');
      }
      const data = await response.json();
      const postId = '1'; // ID of the post to update
  
      const post = data.posts.find(post => post.id === postId);
      if (!post) {
        throw new Error('Post not found');
      }
  
      const title = prompt('Enter the new title', post.title);
      const content = prompt('Enter the new content', post.content);
  
      const updatedPost = {
        id: postId,
        title: title,
        content: content
      };
  
      const updateResponse = await fetch(`/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
      });
  
      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        throw new Error(`Failed to update post: ${errorText}`);
      }
  
      alert('Post updated successfully');
  
      const updatedResponse = await fetch('/db.json');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedResponse.json();
      document.querySelector('#menu-container').innerHTML = template(updatedData);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }
  
  console.log('Updating post with ID:', postId);
console.log('Updated post data:', updatedPostData);

  document.getElementById('posts').addEventListener('submit', getPostRequest);
  
});
