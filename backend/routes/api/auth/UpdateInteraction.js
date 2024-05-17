const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const User = require('../../../models/User');

router.post('/', auth, async (req, res) => {
    const { discipline, timeSpent } = req.body;

    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (!user.interactions) {
            user.interactions = {};
        }

        if (!user.interactions[discipline]) {
            user.interactions[discipline] = 0;
        }

        user.interactions[discipline] += timeSpent;

        await user.save();

        res.json({ interactions: user.interactions });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
