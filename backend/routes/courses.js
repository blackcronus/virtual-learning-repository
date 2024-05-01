const express = require('express');
const router = express.Router();

// Mock data for courses, typically you will connect to a database
const courses = [
    { id: 1, name: "Introduction to Programming", description: "Learn the basics of programming." },
    { id: 2, name: "Advanced JavaScript", description: "Dive deeper into JavaScript." }
];

// GET all courses
router.get('/', (req, res) => {
    res.json(courses);
});

module.exports = router;