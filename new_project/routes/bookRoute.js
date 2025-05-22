// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const {
  createBook,
  getBooks,
  getBookDetails,
  searchBooks
} = require('../controllers/bookController');

const { protect } = require('../middlewares/authMiddleware');

// @route   POST /books - Add a book (Authenticated only)
router.post('/', protect, createBook);

// @route   GET /books - List books (with optional filters)
router.get('/', getBooks);

// @route   GET /books/search?q=searchTerm - Search books
router.get('/search', searchBooks);

// @route   GET /books/:id - Book details with reviews
router.get('/:id', getBookDetails);

module.exports = router;
