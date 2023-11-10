const express = require('express');
const { handleRegistration, handleLogin } = require('../controllers/auth.controller');
const { getAllMatkul } = require('../controllers/matkul.controller');
const { getJadwalByParams } = require('../controllers/jadwal.controller');

const router = express.Router();

router.post('/register', handleRegistration);
router.post('/login', handleLogin);
router.get('/mata-kuliah', getAllMatkul);
router.get("/jadwal/:tahun/:nama_jurusan/:semester_ke/:kelas", getJadwalByParams);

module.exports = router;
