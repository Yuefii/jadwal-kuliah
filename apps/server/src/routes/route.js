const express = require('express');
const { handleRegistration, handleLogin } = require('../controllers/auth.controller');
const { getAllMatkul } = require('../controllers/matkul.controller');

const router = express.Router();

router.post('/register', handleRegistration);
router.post('/login', handleLogin);
router.get('/mata-kuliah', getAllMatkul);

module.exports = router;
