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
