// controllers/reviewController.js
const Review = require('../models/review');

// @desc    Add a review for a book
// @route   POST /books/:id/reviews
exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const bookId = req.params.id;

  try {
    const existing = await Review.findOne({ book: bookId, user: req.user._id });
    if (existing) return res.status(400).json({ message: 'You already reviewed this book' });

    const review = await Review.create({
      user: req.user._id,
      book: bookId,
      rating,
      comment
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add review', error: err.message });
  }
};

// @desc    Update a review
// @route   PUT /reviews/:id
exports.updateReview = async (req, res) => {
  const { rating, comment } = req.body;

  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: 'Not authorized' });

    review.rating = rating;
    review.comment = comment;
    await review.save();

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update review', error: err.message });
  }
};

// @desc    Delete a review
// @route   DELETE /reviews/:id
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: 'Not authorized' });

    await review.deleteOne();
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete review', error: err.message });
  }
};
