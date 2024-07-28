let postsData = [];

export async function deletePostRequest(e) {
    e.preventDefault();
    const postId = e.target.getAttribute('data-id');

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
    //   pagination();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }