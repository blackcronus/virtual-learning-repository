const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  platform: String, // This line is added to match your MongoDB document's keys
  url: String,      // Assuming you want to store the URL
  tags: [String],   // If you have tags as an array of strings
  imageUrl: String, // Assuming you want to store an image URL
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Only if you have a User model and user IDs
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
