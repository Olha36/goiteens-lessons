import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle GET requests for all posts
app.get('/posts', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }
    const db = JSON.parse(data);
    res.status(200).send(db.posts);
  });
});

// Handle GET requests for a specific post by ID
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }
    const db = JSON.parse(data);
    const post = db.posts.find(p => p.id === postId);
    if (!post) {
      res.status(404).send('Post not found');
      return;
    }
    res.status(200).send(post);
  });
});

// Handle POST requests to add a new post
app.post('/posts', (req, res) => {
  const newPost = req.body;
  fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }
    const db = JSON.parse(data);
    db.posts.push(newPost);
    fs.writeFile(path.join(__dirname, 'public', 'db.json'), JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }
      res.status(201).send('Post added successfully');
    });
  });
});

// Handle PUT requests to update a post
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const updatedPostData = req.body;

  fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    const postIndex = db.posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
      res.status(404).send('Post not found');
      return;
    }

    // Update the post
    db.posts[postIndex] = { ...db.posts[postIndex], ...updatedPostData };

    // Write the updated database back to the file
    fs.writeFile(path.join(__dirname, 'public', 'db.json'), JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }

      res.status(200).send('Post updated successfully');
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const deletedPostData = req.body;

  fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    const postIndex = db.posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
      res.status(404).send('Post not found');
      return;
    }

    // Delete the post
    db.posts[postIndex] = { ...db.posts[postIndex], ...deletedPostData };

    // Write the updated database back to the file
    fs.writeFile(path.join(__dirname, 'public', 'db.json'), JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }

      res.status(200).send('Post deleted successfully');
    });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
