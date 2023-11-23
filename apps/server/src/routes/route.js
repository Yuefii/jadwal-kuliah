const express = require("express");
const {
  handleRegistration,
  handleLogin,
  handleProfileUpdate,
} = require("../controllers/auth.controller");
const { jadwalController } = require("../controllers/jadwal.controller");
const { profileUser, uploadAvatar } = require("../services/auth.service");
const accessValidation = require("../middlewares/validation");
const path = require("path");

const router = express.Router();

router.post("/auth/register", handleRegistration);
router.post("/auth/login", handleLogin);
router.get("/api/V1/user-profile", accessValidation, profileUser);
router.patch("/api/V1/update-profile", accessValidation, handleProfileUpdate);
router.post("/upload-avatar", accessValidation, uploadAvatar);
router.get("/api/V1/jadwal", jadwalController);
router.get("/gambar/:namaFile", (req, res) => {
  const { namaFile } = req.params;
  res.sendFile(path.join(__dirname, "public", namaFile));
});

module.exports = router;
