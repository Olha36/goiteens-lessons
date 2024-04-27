const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();
const port = 61227;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/feedbackFormDB', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// Create a schema for storing form data
// const feedbackSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String
// });

// const Feedback = mongoose.model('Feedback', feedbackSchema);

app.use(bodyParser.json());

// Route for storing form data
app.post('/4semester/ht5/index.html', async (req, res) => {
  try {
    // Process the incoming request body containing form data
    const { name, email, message } = req.body;
    
    // Perform any necessary validation or processing of the form data
    
    // Assuming you have a MongoDB model Feedback defined
    
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    
    // Send a success response back to the client
    res.status(201).send('Feedback submitted successfully!');

  } catch (error) {
    // Handle errors that occur during processing
    console.error('Error submitting feedback:', error);
    
    // Send an error response back to the client
    res.status(500).send('Error submitting feedback');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
