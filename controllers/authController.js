const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, 'secretkey');
  res.json({ token });
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
};
