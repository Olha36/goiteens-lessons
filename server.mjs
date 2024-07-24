import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST requests to add a new post
app.post('/posts', (req, res) => {
  const newPost = req.body;

  fs.readFile('./public/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    db.posts.push(newPost);

    fs.writeFile('./public/db.json', JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }

      console.log('New post added successfully');
      res.status(201).send('Post added successfully');
    });
  });
});

// Handle PUT requests to update a post
app.put('/posts', (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  fs.readFile('./public/db.json', 'utf8', (err, data) => {
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

    db.posts[postIndex] = updatedPost;

    fs.writeFile('./public/db.json', JSON.stringify(db, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }

      console.log('Post updated successfully');
      res.status(200).send('Post updated successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
