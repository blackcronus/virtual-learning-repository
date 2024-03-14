const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  lastLogin: Date,
  // Add other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;