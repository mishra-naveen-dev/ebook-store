const express = require("express");
const { signup, login,forgotPassword,logout } = require("../controllers/authController");

const router = express.Router();

// Signup Route
router.post("/register", signup);
router.post("/login", login);

router.post("/logout", logout);

  router.post("/forgot-password", forgotPassword);  
module.exports = router;
