// courses.js in the routes directory
const express = require('express');
const router = express.Router();
const Course = require('../models/course'); // Adjust the path as necessary

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
