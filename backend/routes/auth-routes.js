// auth-routes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path to your User model
const passport = require('passport');

// Register route
router.post('/register', async (req, res) => {
  // ...
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // ...
});

// You may also want to add logout functionality
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
