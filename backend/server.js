require('dotenv').config(); // This should be the first line
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.use('/api/courses', require('./routes/courses'));

// Catch-all for 404 errors
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
