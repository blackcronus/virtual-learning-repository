require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

if (!connectionString) {
  console.error('MongoDB connection string missing. Ensure you have a .env file with MONGODB_URI set.');
  process.exit(1);
}

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
