const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use('/api/auth/register', require('./routes/api/auth/register'));
app.use('/api/auth/login', require('./routes/api/auth/login'));
app.use('/api/auth/me', require('./routes/api/auth/me')); // Add this line
app.use('/api/auth/update-interaction', require('./routes/api/auth/updateInteraction')); // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
