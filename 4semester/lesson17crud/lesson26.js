const api = 'https://jsonplaceholder.typicode.com/posts?_limit=3';
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const postList = document.getElementById('postList');
let posts = [];

// Fetch and render initial posts
async function getData() {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        posts = await response.json(); // Parse JSON response
        renderPosts(); // Render posts after fetching
    } catch (err) {
        console.error('Error fetching posts:', err);
    }
}

// Render posts in the DOM
function renderPosts() {
    postList.innerHTML = ''; // Clear existing list
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.dataset.id = post.id;
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        postList.appendChild(li);
    });
}

// Add a new post
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now(), // Temporary ID
    };
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost),
        });
        const createdPost = await response.json();
        posts = [createdPost, ...posts];
        renderPosts(); // Re-render posts
        postForm.reset(); // Clear inputs
    } catch (err) {
        console.error('Error adding post:', err);
    }
});

// Handle edit and delete button clicks
postList.addEventListener('click', (e) => {
    const postId = e.target.closest('li')?.dataset.id;

    if (e.target.classList.contains('editBtn')) {
        editPost(postId);
    } else if (e.target.classList.contains('deleteBtn')) {
        deletePost(postId);
    }
});

// Edit a post
function editPost(id) {
    const postToEdit = posts.find((post) => post.id === +id);
    if (postToEdit) {
        titleInput.value = postToEdit.title;
        bodyInput.value = postToEdit.body;

        postForm.onsubmit = async (e) => {
            e.preventDefault();
            postToEdit.title = titleInput.value;
            postToEdit.body = bodyInput.value;

            try {
                // Simulate PUT request
                await fetch(`${api}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(postToEdit),
                });
                renderPosts();
                postForm.reset();
                postForm.onsubmit = addPost; // Reset to add functionality
            } catch (err) {
                console.error('Error editing post:', err);
            }
        };
    }
}

// Delete a post
async function deletePost(id) {
    try {
        // Simulate DELETE request
        await fetch(`${api}/${id}`, {
            method: 'DELETE',
        });
        posts = posts.filter((post) => post.id !== +id);
        renderPosts();
    } catch (err) {
        console.error('Error deleting post:', err);
    }
}

// Reset form to add functionality
function addPost(e) {
    e.preventDefault();
    const newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now(),
    };
    posts = [newPost, ...posts];
    renderPosts();
    postForm.reset();
}

// Initialize
getData();
