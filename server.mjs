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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
