
const express = require('express');
const router = express.Router();
const goalSettingController = require('../controllers/goalSettingController');
const auth = require('../middleware/auth');

router.post('/goal-setting', auth, goalSettingController.submitGoalSetting);

module.exports = router;
