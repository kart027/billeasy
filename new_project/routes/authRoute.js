// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// @route   POST /signup
router.post('/signup', signup);

// @route   POST /login
router.post('/login', login);

module.exports = router;
