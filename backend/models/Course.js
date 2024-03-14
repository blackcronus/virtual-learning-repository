const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String, // This could be a URL to the content or actual content text
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  // Add other course-related fields as needed
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;