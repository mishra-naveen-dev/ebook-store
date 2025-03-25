const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  logout,
} = require("../controllers/authController");
const { getUserProfile } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Signup Route
router.post("/register", signup);
router.post("/login", login);

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword);

// Profile route (requires authentication)

router.get("/profile", authMiddleware, getUserProfile);
module.exports = router;
