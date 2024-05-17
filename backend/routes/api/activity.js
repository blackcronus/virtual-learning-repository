// routes/api/activity.js
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const UserActivity = require('../../models/UserActivity');

// POST /api/activity/log
router.post('/log', auth, async (req, res) => {
    const { page, timeSpent } = req.body;
    try {
        const activity = new UserActivity({
            userId: req.user.id,
            page,
            timeSpent,
        });
        await activity.save();
        res.status(200).json({ msg: 'Activity logged' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// GET /api/activity/:userId
router.get('/:userId', auth, async (req, res) => {
    try {
        const activities = await UserActivity.find({ userId: req.params.userId });
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
