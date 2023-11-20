const express = require("express");
const {
  handleRegistration,
  handleLogin,
  handleProfileUpdate,
} = require("../controllers/auth.controller");
const { jadwalController } = require("../controllers/jadwal.controller");
const { profileUser } = require("../services/auth.service");
const accessValidation = require("../middlewares/validation");

const router = express.Router();

router.post("/auth/register", handleRegistration);
router.post("/auth/login", handleLogin);
router.get("/api/V1/user-profile", accessValidation, profileUser);
router.patch("/api/V1/update-profile", accessValidation, handleProfileUpdate);
router.get("/api/V1/jadwal", jadwalController);

module.exports = router;
