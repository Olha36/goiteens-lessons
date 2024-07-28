let postsData = [];
let currentPage = 1;
export async function getPostRequest(e) {
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
        document.getElementById('create-post').value = '';
        document.getElementById('contentArea').value = '';

        const updatedResponse = await fetch('/db.json');
        if (!updatedResponse.ok) {
            throw new Error('Failed to fetch updated data');
        }
        const updatedData = await updatedResponse.json();
        postsData = updatedData.posts;
        currentPage = 1; // Reset to first page after adding a new post
        // pagination();
    } catch (error) {
        console.log('Error adding post to database', error);
    }
}

