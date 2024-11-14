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


const express = require("express"); 
const fs = require('fs'); 
const bodyParser = require('body-parser'); 
const { error } = require("console");

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
    console.log("Received data:", req.body); // Debug: Log received data

    fs.readFile(filePath, 'utf8', (err, data) => { 
        if (err) { 
            console.error("Error reading file:", err); 
            return res.status(500).send('Error reading file');
        }

        let students;
        try {
            students = JSON.parse(data); 
        } catch (parseErr) {
            console.error("Error parsing JSON:", parseErr);
            return res.status(500).send("Error parsing JSON data");
        }

        const newStudent = { 
            ...req.body, 
            subjects: Array.isArray(req.body.subjects) ? req.body.subjects : [req.body.subjects] // Ensure subjects is an array
        };

        students.push(newStudent);

        fs.writeFile(filePath, JSON.stringify(students, null, 2), (error) => {
            if (error) { 
                console.error("Error writing file:", error); 
                return res.status(500).send('Error writing file');
            }
            console.log("Student successfully added:", newStudent); // Debug: Log successful addition
            res.send("Student is added");
        });
    });
});


app.put('/students', (req, res) => {
    const editIndex = req.params.index;
    fs.readFile(filePath, (error, data) => {
        if (error) { 
            console.error("Error reading file:", error); 
            return res.status(500).send('Error reading file');
        }
        const  students = JSON.parse(data); 
        students[editIndex] = req.body;
        fs.writeFile(filePath, JSON.stringify(students), (error) => {
            if (error) { 
                console.error("Error writing file:", error); 
                return res.status(500).send('Error writing file');
            }
            res.send("Student is updated");
        })                                   
    })
})

app.delete('/students', (req, res) => {
    const editIndex = req.params.index;
    fs.readFile(filePath, (error, data) => {
        if (error) { 
            console.error("Error reading file:", error); 
            return res.status(500).send('Error reading file');
        }
        const  students = JSON.parse(data); 
        students.splice(editIndex,1);
        fs.writeFile(filePath, JSON.stringify(students), (error) => {
            if (error) { 
                console.error("Error writing file:", error); 
                return res.status(500).send('Error writing file');
            }
            res.send("Student is deleted");
        })                                   
    })
})






app.listen(PORT, () => { 
    console.log(`Service is running on port http://localhost:${PORT}`); 
})