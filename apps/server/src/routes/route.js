const express = require('express');
const { handleRegistration, handleLogin } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', handleRegistration);
router.post('/login', handleLogin);

module.exports = router;
