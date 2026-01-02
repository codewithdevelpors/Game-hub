const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  downloadLinks: [{
    name: { type: String, required: true },
    url: { type: String, required: true },
  }],
  imageUrl: {
    type: String,
    default: '',
  },
  screenshots: [{
    type: String,
  }],
  systemRequirements: {
    os: { type: String },
    processor: { type: String },
    memory: { type: String },
    graphics: { type: String },
    storage: { type: String },
  },
  size: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  developer: {
    type: String,
  },
  publisher: {
    type: String,
  },
  genres: [{
    type: String,
  }],
  version: {
    type: String,
  },
  category: {
    type: String,
    default: 'General',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', gameSchema);