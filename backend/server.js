require('dotenv').config(); // Environment variables
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport'); // Require passport for authentication

const app = express();

// Passport Config
require('./config/passport-config')(passport); // Pass passport for configuration

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware for parsing JSON bodies
app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Define routes
app.use('/api/courses', require('./routes/courses')); // Course routes
app.use('/api/users', require('./routes/auth-routes')); // Authentication routes

// Catch-all for 404 errors
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
