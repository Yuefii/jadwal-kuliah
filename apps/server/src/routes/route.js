const express = require("express");
const {
  handleRegistration,
  handleLogin,
} = require("../controllers/auth.controller");
const { jadwalController } = require("../controllers/jadwal.controller");
const { profileUser } = require("../services/auth.service");
const accessValidation = require("../middlewares/validation");

const router = express.Router();

router.post("/auth/register", handleRegistration);
router.post("/auth/login", handleLogin);
router.get("/api/V1/user-profile", accessValidation, profileUser);
router.get("/api/v1/jadwal", jadwalController);

module.exports = router;
