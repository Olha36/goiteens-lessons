import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/posts', (req, res) => {
  const newPost = req.body;

  fs.readFile('./db.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading database file');
      return;
    }

    const db = JSON.parse(data);
    db.posts.push(newPost);

    fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        res.status(500).send('Error writing to database file');
        return;
      }

      res.status(201).send('Post added successfully');
    });
  });
});