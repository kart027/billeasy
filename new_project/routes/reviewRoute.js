// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const {
  addReview,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

const { protect } = require('../middlewares/authMiddleware');

// @route   POST /books/:id/reviews - Add a review to a book
router.post('/books/:id/reviews', protect, addReview);

// @route   PUT /reviews/:id - Update your own review
router.put('/reviews/:id', protect, updateReview);

// @route   DELETE /reviews/:id - Delete your own review
router.delete('/reviews/:id', protect, deleteReview);

module.exports = router;
