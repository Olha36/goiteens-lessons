const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
const filePath = 'students.json';

app.use(express.static('public'));

app.get('/students', function (req, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).send('Error reading a file')

        }
       const jsonParseStudents = JSON.parse(data);
       res.json(jsonParseStudents)
      });
})

app.post('/students', function (req, res) {
  const newStudent = req.body;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading database file:', err);
      return res.status(500).send('Error reading a file');
    }
    const db = JSON.parse(data);
    db.students.push(newStudent);
    fs.writeFile(filePath, JSON.stringify(db), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to database file:', err);
        res.status(500).send('Error writing to database file');
        return;
      }
      res.status(201).send('Post added successfully');
    });
  });
});

app.listen(PORT, () => {
    console.log(`Service is running on port http://localhost:${PORT}`);
})


