let postsData = [];

export async function getUpdateRequest(e) {
    e.preventDefault();

    const postId = e.target.getAttribute('data-id');
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

      const updatedPostsResponse = await fetch('/db.json');
      if (!updatedPostsResponse.ok) {
        throw new Error('Failed to fetch updated data');
      }
      const updatedData = await updatedPostsResponse.json();
      postsData = updatedData.posts;
    //   pagination();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }