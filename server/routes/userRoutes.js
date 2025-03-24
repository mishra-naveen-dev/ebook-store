const express = require("express");

const { getUserProfile } = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// Profile route (requires authentication)

router.get("/profile", verifyToken, getUserProfile);
module.exports = router;
