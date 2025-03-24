const express = require("express");
const authMiddleware = require("../middleware/auth.js");

const router = express.Router();

// Protected Route Example
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.email}! This is a protected route.`,
  });
});

module.exports = router;
