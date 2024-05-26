const express = require('express');
const router = express.Router();
const dailyReviewController = require('../controllers/dailyReviewController');
const auth = require('../middleware/auth');

router.post('/daily-review', auth, dailyReviewController.submitDailyReview);

module.exports = router;
