const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  interactionType: String, // For example, "completed", "viewed", "bookmarked"
  date: { type: Date, default: Date.now },
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;