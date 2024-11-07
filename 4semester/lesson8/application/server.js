// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const port = 3000;
// const filePath = 'students.json';

// // Middleware для парсингу JSON
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Сервер статичних файлів
// app.use(express.static('public'));

// // Отримати всі записи про студентів
// app.get('/students', (req, res) => {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading file');
//         }
//         const students = JSON.parse(data);
//         res.json(students);
//     });
// });

// // Додати нового студента
// app.post('/students', (req, res) => {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading file');
//         }
//         const students = JSON.parse(data);
//         students.push(req.body);
//         fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).send('Error writing file');
//             }
//             res.send('Student added');
//         });
//     });
// });

// // Оновити студента
// app.put('/students/:index', (req, res) => {
//     const index = req.params.index;
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading file');
//         }
//         const students = JSON.parse(data);
//         students[index] = req.body;
//         fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).send('Error writing file');
//             }
//             res.send('Student updated');
//         });
//     });
// });

// // Видалити студента
// app.delete('/students/:index', (req, res) => {
//     const index = req.params.index;
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading file');
//         }
//         const students = JSON.parse(data);
//         students.splice(index, 1);
//         fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).send('Error writing file');
//             }
//             res.send('Student deleted');
//         });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require ("express"); 
const fs = require('fs'); 
const bodyParser = require('body-parser'); 

 
 
const app = express() 
const PORT = 3000 
const filePath = 'students.json'; 
 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 
 
app.use(express.static('public')) 
 
app.get('/students', function (req, res) { 
    fs.readFile(filePath, 'utf8', (err, data) => { 
        if (err) { 
        return res.status(500).send('Error reading a file') 
        } 
        const jsonParseStudents = JSON.parse(data) 
        res.json(jsonParseStudents) 
        }); 
}) 
 
app.post('/students', (req, res) => { 
    fs.readFile(filePath, 'utf8', (err, data) => { 
        if (err) { 
            return res.status(500).send('Error reading file'); 
        }
        const jsStudents = JSON.parse(data);
        jsStudents.push(req.body);
        
        fs.writeFile(filePath, JSON.stringify(jsStudents, null, 2), (error) => {
            if (error) { 
                return res.status(500).send('Error writing file'); 
            }
            res.send("Student is added");
        });
    });
});


app.listen(PORT, () => { 
    console.log(`Service is running on port http://localhost:${PORT}`); 
})