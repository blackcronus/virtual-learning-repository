require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
    
    // If your Mongoose models are in separate files, you'd require them like this:
    const User = require('./models/User');
    const Course = require('./models/Course');
    const Interaction = require('./models/Interaction');

    // Example of using a model to interact with the database:
    // Creating a new user
    const newUser = new User({
      username: 'exampleUser',
      email: 'user@example.com',
      passwordHash: 'hashed_password', // In production, you'd hash the password first
      // other fields can be added as necessary
    });

    newUser.save()
      .then(user => console.log('New user created:', user))
      .catch(err => console.error('Error creating user:', err));

    // Similarly, you can interact with other models (Course, Interaction)
    
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
