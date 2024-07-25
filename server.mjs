import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send index.html for the root route
app.get('/posts', (req, res) => {
  fs.readFile('./public/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    res.status(200).send(db.posts);
  });
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
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const updatedPostData = req.body;

  fs.readFile('./path/to/your/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading database file:', err);
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    const postIndex = db.posts.findIndex(post => post.id.toString() === postId);

    if (postIndex === -1) {
      res.status(404).send('Post not found');
      return;
    }

    // Update the post
    db.posts[postIndex] = { ...db.posts[postIndex], ...updatedPostData };

    // Write the updated database back to the file
    fs.writeFile('./path/to/your/db.json', JSON.stringify(db), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }

      res.status(200).send('Post updated successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
