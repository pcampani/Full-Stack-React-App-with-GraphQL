const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  publisherID: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Game', GameSchema);