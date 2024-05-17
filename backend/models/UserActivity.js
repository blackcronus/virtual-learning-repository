// models/UserActivity.js
const mongoose = require('mongoose');

const UserActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    page: {
        type: String,
        required: true,
    },
    timeSpent: {
        type: Number,
        required: true, // Time spent in seconds
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('UserActivity', UserActivitySchema);
