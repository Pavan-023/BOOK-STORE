const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true
  },
  genre: String,
  description: String,
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 0
  },
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
