
exports.submitGoalSetting = (req, res) => {
    const { goals } = req.body;
    // Save goals
    res.json({ message: 'Goals saved' });
  };
  