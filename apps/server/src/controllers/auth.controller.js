const { registerUser, loginUser } = require('../services/auth.service');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

const handleRegistration = async (req, res) => {
  const { npm, password } = req.body;
  try {
    const result = await registerUser(npm, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleLogin = async (req, res) => {
  const { npm, password } = req.body;
  try {
    const user = await loginUser(npm, password);
    const token = jwt.sign({ npm: user.npm }, secretKey);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { handleRegistration, handleLogin };
