const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection
const db = config.get('mongoURI');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
