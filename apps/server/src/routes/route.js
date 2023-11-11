const express = require('express');
const { handleRegistration, handleLogin } = require('../controllers/auth.controller');
const { getAllMatkul } = require('../controllers/matkul.controller');
const { getJadwalByParams } = require('../controllers/jadwal.controller');
const {profileUser} = require('../services/auth.service')
const accessValidation = require('../middlewares/validation')


const router = express.Router();

router.post('/auth/register', handleRegistration);
router.post('/auth/login', handleLogin);
router.get('/apiV1/user', accessValidation, profileUser);
router.get('/apiV1/mata-kuliah', getAllMatkul);
router.get("/apiV1/jadwal/:tahun/:nama_jurusan/:semester_ke/:kelas", getJadwalByParams);

module.exports = router;
