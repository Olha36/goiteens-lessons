let template;
let currentPage = 1;
const postsPerPage = 3;
let postsData = [];

document.addEventListener('DOMContentLoaded', async function () {

  try {
    const response = await fetch('/db.json');
    if (!response.ok) {
      throw new Error('Network response was not ok!');
    }

    const data = await response.json();

    postsData = data.posts;

    const source = document.querySelector('#menu-template').innerHTML;
    template = Handlebars.compile(source);
    pagination();
  } catch (error) {
    console.log('Error fetching or processing data', error);
  }
  const menuItemLiElement = document.querySelectorAll('.menu-item');
  menuItemLiElement.forEach(item => {
    item.addEventListener('click', getUpdateRequest);
  });
  document.getElementById('posts').addEventListener('submit', getPostRequest);
  document.getElementById('prev-page').addEventListener('click', showPreviousPage);
  document.getElementById('next-page').addEventListener('click', showNextPage);

  function pagination() {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = postsData.slice(start, end);

    const paginatedData = { posts: paginatedPosts, comments: [], profile: { name: "User" } };
    document.querySelector('#menu-container').innerHTML = template(paginatedData);
    setDeleteButtonListeners();
    updatePageInfo();
  }

  function updatePageInfo() {
    const pageInfo = document.getElementById('page-info');
    const totalPages = Math.ceil(postsData.length / postsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  function showPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      pagination();
    }
  }

  function showNextPage() {
    const totalPages = Math.ceil(postsData.length / postsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      pagination();
    }
  }

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
        throw new Error('Failed to add post to database', errorText);
      }

      alert('Post added successfully');

      const updatedResponse = await fetch('/db.json');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedResponse.json();
      postsData = updatedData.posts;
      currentPage = 1; // Reset to first page after adding a new post
      pagination();
    } catch (error) {
      console.log('Error adding post to database', error);
    }
  }

  function setDeleteButtonListeners() {
    const deletePostButtons = document.querySelectorAll('.delete-post');

    deletePostButtons.forEach(button => {
      button.addEventListener('click', deletePostRequest);
    });
  }

  async function deletePostRequest(e) {
    console.log('post', e.target);

    e.preventDefault();
    const postId = e.target.getAttribute('data-id');
    console.log('Deleting post with ID:', postId);

    try {
      const deleteResponse = await fetch(`/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!deleteResponse.ok) {
        const errorText = await deleteResponse.text();
        throw new Error(`Failed to delete post: ${errorText}`);
      }

      alert('Post deleted successfully');

      const updatedResponse = await fetch('/db.json');
      if (!updatedResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedResponse.json();
      postsData = updatedData.posts;
      pagination();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  async function getUpdateRequest(e) {
  e.preventDefault();

  const postId = e.target.getAttribute('data-id'); // Get the ID from the clicked button
  if (!postId) {
    console.error('No post ID found');
    return;
  }

  try {
    const response = await fetch(`/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from db.json');
    }
    const post = await response.json();

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

    // Fetch the updated posts data and re-render
    const updatedPostsResponse = await fetch('/db.json');
    if (!updatedPostsResponse.ok) {
      throw new Error('Failed to fetch updated data');
    }
    const updatedData = await updatedPostsResponse.json();
    postsData = updatedData.posts; // Update local postsData
    pagination(); // Re-render posts with updated data
  } catch (error) {
    console.error('Error updating post:', error);
  }
}

  
});
