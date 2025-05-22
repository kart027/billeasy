// controllers/bookController.js
const Book = require('../models/book');
const Review = require('../models/review');

// @desc    Create a new book
// @route   POST /books
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error creating book', error: err.message });
  }
};

// @desc    Get all books with pagination and filters
// @route   GET /books
exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, 'i');
  if (genre) query.genre = new RegExp(genre, 'i');

  try {
    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err.message });
  }
};

// @desc    Get book by ID with reviews and average rating
// @route   GET /books/:id
exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const reviews = await Review.find({ book: book._id }).populate('user', 'username');
    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

    res.json({ book, averageRating, reviews });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book', error: err.message });
  }
};

// @desc    Search books by title or author
// @route   GET /books/search?q=query
exports.searchBooks = async (req, res) => {
  const { q } = req.query;

  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(q, 'i') },
        { author: new RegExp(q, 'i') }
      ]
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};
