const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
const filePath = 'students.json';

app.get('/students', function (req, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
})

app.listen(PORT, () => {
    console.log(`Service is running on port http://localhost:${PORT}`);
})
